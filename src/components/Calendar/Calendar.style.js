import styled from "styled-components";

export const CalendarWrapper = styled.div`
  display: flex;

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
  .react-calendar__tile--range:hover {
    background-color: #1087ff;
  }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    input {
        width: 140px;
        font-size: 18px;
        padding: 4px 25px 4px 10px;
        background: url(https://litepms.ru/img/calendar_icon.svg) #fff no-repeat top 50% right 5px;
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
        position: absolute;
        top: 71px;
        width: 330px;
    }
`;

export const CalendarComponentWrapper = styled.div`
    display: flex;
    gap: 1.5rem;
`;
