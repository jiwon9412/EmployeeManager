import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import React, { useRef } from "react";
import upload from "../../service/file_upload";

interface IImageUploader {
  title?: string;
  width?: string;
  height?: string;
  interval?: string;
  handleUpload?: (url: string) => void;
}

interface IImageInputButton {
  width?: string;
  height?: string;
  interval?: string;
}

const ImageUploader = ({
  title,
  width,
  height,
  interval,
  handleUpload,
}: IImageUploader) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const selectImage = (event: React.MouseEvent): void => {
    event.preventDefault();
    inputRef.current?.click();
  };

  const uploadImage = (event: any): void => {
    //console.log(event.target.files[0]);
    const file = event.target.files[0];
    //image upload
    upload(file).then((url) => {
      try {
        handleUpload && handleUpload(url.toString());
      } catch (error) {
        alert(`Error : ${error}`);
      }
    });
    //firebase에 url올리기);
  };
  return (
    <ImageUploaderBox>
      <p>{title || "Photo"} </p>
      <ImageInputButton
        width={width}
        height={height}
        interval={interval}
        onClick={selectImage}
      >
        <p>
          <FontAwesomeIcon icon={faImage} /> Image
        </p>
      </ImageInputButton>
      <ImageInput type='file' ref={inputRef} onChange={uploadImage} />
    </ImageUploaderBox>
  );
};

export default ImageUploader;

const ImageUploaderBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  p {
    width: 20%;
    min-width: 80px;
    font-size: 1em;
    font-weight: 600;
  }
`;

const ImageInput = styled.input`
  width: 50%;
  display: none;
`;

const ImageInputButton = styled.button<IImageInputButton>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width || "30%"};
  min-width: 80px;
  height: ${(props) => props.height || "2.5em"};
  margin-left: ${(props) => props.interval || "1em"};
  border: 1px solid rgb(44, 44, 44);
  /* border-radius: 1em; */

  outline: none;
  cursor: pointer;
  color: rgb(44, 44, 44);
  font-size: 1em;
  background-color: #fff;

  p {
    width: 100%;
    font-size: 0.9em;
  }

  &:hover {
    border: 2px solid #000;
    p {
      color: #000;
      font-weight: 600;
    }
  }
`;
