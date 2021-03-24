import React from 'react';

import {userDispatch, useSelector} from "react-redux";

const Detail = (props) => {
    const bucket_list = useSelector((state)=> state.bucket.list);
    let bucket_idx = parseInt(props.match.params.idx);
    return <h1>{bucket_list[bucket_idx]}</h1>
};

export default Detail;s