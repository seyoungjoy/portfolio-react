import React, { useRef } from "react";

const VideoSearch = ({ onSearch }) => {
  const inputRef = useRef();

  const handleSearch = () => {
    const value = inputRef.current.value;
    onSearch(value);
  };

  const onClick = () => {
    //console.log("onclick");
    handleSearch();
  };
  const onKeyPress = (event) => {
    //console.log("onKeyPress");
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="title">
      <h2>검색하기</h2>
      <input
        ref={inputRef} //글씨 쓰는게 실시간으로 됨.
        type="search"
        placeholder="검색하세요."
        onKeyPress={onKeyPress}
      />
      <button type="submit" onClick={onClick}>
        검색
      </button>
    </div>
  );
};

export default VideoSearch;