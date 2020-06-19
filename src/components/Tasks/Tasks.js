import React from "react";
import "./Tasks.css";
import VisibleTaskList from "../../containers/VisibleTaskList";
import AddTask from "../../containers/AddTask/AddTask";
import Filter from "../../containers/Filter/Filter";
import Sort from "../../containers/Sort/Sort";

const Section = ({ title, children }) => {
  return (
    <section className="Section">
      {title && <h2 className="Section-title">{title}</h2>}
      {children}
    </section>
  );
};

function Tasks() {
  return (
    <div className="Tasks">
      <Section title="Add Task">
        <AddTask />
      </Section>

      <Section title="Filter Tasks">
        <Filter />
      </Section>

      <Section title="Sort Tasks">
        <Sort />
      </Section>

      <Section>
        <VisibleTaskList />
      </Section>
    </div>
  );
}

export default Tasks;
