
// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from "styled-components";

// redux hook을 불러옵니다.
import { useDispatch, useSelector } from "react-redux";
// 내가 만든 액션 생성 함수를 불러옵니다.
import { deleteBucket, updateBucket } from "./redux/modules/bucket";

const Progress = (props) => {
  // 스토어에서 상태값 가져오기
  const bucket_list = useSelector((state) => state.bucket.list);

  let count = 0;

  let goal_per = bucket_list.map((l, idx) => {
    if(l.completed){
        count++;
    }
  });

  return (
    <ProgressBar>
      <HighLight width={(count / bucket_list.length) * 100 + "%"}></HighLight>
    </ProgressBar>
  );
};

const ProgressBar = styled.div`
  background: #eee;
  width: 100%;
  height: 40px;
`;

const HighLight = styled.div`
  background: orange;
  width: ${(props) => props.width};
  height: 40px;
  transition: all 200ms ease;
`;
export default Progress;