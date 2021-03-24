//bucket.js

//Actions
const LOAD = "bucket/LOAD";
const CREATE = "bucket/CREATE";

const initialState = {
    list:["영화 보기","드라이브 가기","수영 배우기"]
};

//Action Creators
export const loadBucket = (bucket) =>{
    return {type:LOAD};
}

export const createBucket = (bucket) =>{
    return {type: CREATE, bucket}
}

//Render
export default function reducer(state = initialState, action ={}){
    switch (action.type) {
        case "bucket/LOAD":{
            return state;
        }
        case "bucket/CREATE":{
            const new_bucket_list = [...state.list, action.bucket];
            return {list: new_bucket_list};
        }

        default:
            return state;
    }
}