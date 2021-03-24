import React from 'react';
import styled from 'styled-components';
import { BsFillCaretLeftFill, BsFillCaretRightFill } from "react-icons/bs";
import { createAction, handleActions } from 'redux-actions';
import moment, { Moment as MomentTypes } from 'moment';
import produce from "immer"

import {useState} from 'react'; 
import { useDispatch, useSelector } from 'react-redux';


const Calendar=(props)=>{
    const [getMoment, setMoment] = useState(moment())
    const today = getMoment;
    function generate(){
        const startWeek = today.clone().startOf('month').week();
        const endWeek = today.clone().endOf('month').week() === 1 ? 53: today.clone().endOf('month').week();
        let calendar= [];
        for(let week = startWeek; week <= endWeek; week++){
            calendar.push(
                <Row key={week}>
                    {
                        Array(7).fill(0).map((n, i)=>{
                            let current = today.clone().week(week).startOf('week').add(n+i, 'day')
                            let isToday = today.format('YYYYMMDD') === current.format('YYYYMMDD')? 'today': ''
                            let isSelected = props.date.format('YYYYMMDD') === current.format('YYYYMMDD') ? 'selected' : '';
                            let isGrayed = current.format('MM') === today.format('MM') ? '' : 'grayed';
                            return(
                                <Box className={`${isGrayed}`} key={i}>
                                    <Text className={`${isSelected}`}>{current.format('D')}</Text>
                                </Box>
                            )
                        })
                    }
                </Row>
            )
        }
        return calendar;
    }
    return(
        <CalendarWrap>
            <Header>
                <Button onClick={()=>{ setMoment(getMoment.clone().subtract(1, 'month')) }} > <BsFillCaretLeftFill/></Button>
                <Title>{today.format('MMMM YYYY')}</Title>
                <Button onClick={()=>{ setMoment(getMoment.clone().add(1, 'month')) }} ><BsFillCaretRightFill/></Button>
            </Header>
            <Body>
                <Row>
                    <Box>
                        <Text className="red">SUN</Text>
                    </Box>
                    <Box>
                        <Text>MON</Text>
                    </Box>
                    <Box>
                        <Text>TUE</Text>
                    </Box>
                    <Box>
                        <Text>WED</Text>
                    </Box>
                    <Box>
                        <Text>THU</Text>
                    </Box>
                    <Box>
                        <Text>FRI</Text>
                    </Box>
                    <Box>
                        <Text className="blue">SAT</Text>
                    </Box>
                </Row>
                {generate()}
            </Body>
        </CalendarWrap>
    )
}

const CalendarWrap = styled.div`
    margin: 10px
    user-select: none;
    background-color: white;
    padding:5px;
    border: none;
    border-radius: 5px;
    box-shadow:3px 3px 3px 3px #999;
    .red{
        color:red;
    }
    .blue{
        color:darkblue;
    }
    .grayed{
        color: gyay;
    }
    
`;

const Header = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 8px;
`;

const Button = styled.button`
    cursor: pointer;
    outline: none;
    display: inline-flex;
    background: transparent;
    border: none;
    font-size: 20pt;
    padding: 4px;
    border-radius: 4px;
    &:hover{
        background-color: #abcfb4;
    }
`;

const Title = styled.span `
    cursor:pointer;
    border-radius: 5px;
    padding: 4px 12px;
`;


const Body = styled.div``;

const Row = styled.div`
    display: flex;
    cursor: pointer;
    
    .grayed{
        color:gray
    }
    
`;

const Box = styled.div`
    position: relative;
    display: inline-flex;
    width: calc(100%/7);
    height: 0;
    padding-bottom: calc(100%/7);
    font-size: 12pt;
    &:first-child{
        color: red;
    }
    &:last-child{
        color: darkblue;
    }
    &.grayed{
        color:gray
    }
    
    
`;

const Text = styled.div`
    border-radius: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    
    &.selected{
        color: white;
        background-color: salmon;
        padding:15px
    }

`;

export default Calendar;