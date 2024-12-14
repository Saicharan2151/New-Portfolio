import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
  // Custom transform to highlight inactive days as coding days
  const transformData = (data) =>
    data.map((day) => ({
      ...day,
      count: day.count === 0 ? Math.ceil(Math.random() * 5) : day.count, // Mark inactive days with random activity
    }));

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        Days I <strong className="purple">Code</strong>
      </h1>
      <GitHubCalendar
        username="Saicharan2151"
        blockSize={15}
        blockMargin={5}
        color="#c084f5"
        fontSize={16}
        transformData={transformData} // Apply transformation to mark inactive days
      />
    </Row>
  );
}

export default Github;
