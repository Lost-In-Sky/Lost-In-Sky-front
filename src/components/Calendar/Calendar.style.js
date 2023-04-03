import styled from "styled-components";

export const CalendarWrapper = styled.div`
  position: absolute;
  top: 52px;
  display: flex;
  left: -64px;

  .react-calendar__tile--now {
    background-color: transparent;
  }
  .react-calendar__tile--now:hover {
    background-color: #f0f0f0;
  }
  .react-calendar__tile:disabled {
    background-color: #f0f0f0;
  }
  .react-calendar__tile--range {
    background-color: #006edc;
    color: white;
  }
  .react-calendar__tile--hasActive {
    background-color: #006edc !important;
    color: white;
  }
  
  .react-calendar__tile--hasActive:enabled:hover, .react-calendar_tile--hasActive:enabled:focus {
    background-color: #006edc;
  }
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  input {
    width: 165px;
    font-size: 18px;
    padding: 4px 25px 4px 10px;
    background: url(https://litepms.ru/img/calendar_icon.svg) #fff no-repeat top
      50% right 5px;
    background-size: 16px 16px;
    height: 42px;
    border: 1px solid #c4c4c4;
    border-radius: 3px;
    vertical-align: middle;
    touch-action: none;
  }

  input:hover {
    border-color: #1e90ff;
  }
  .react-calendar {
    z-index: 1;
    width: 330px;
  }
`;
