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

  .react-calendar__tile--rangeEnd {
    background-color: #006edc;
    color: white;
  }

  .react-calendar__tile--rangeEnd:hover {
    background-color: #1087ff;
  }
`;
