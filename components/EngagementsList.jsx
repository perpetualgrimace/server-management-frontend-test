import { useState } from "react";

import sortArrayByObjKey from "functions/sortArrayByObjKey";
import toPercentage from "functions/toPercentage";

import Accordion from "/components/Accordion";
import AccordionPanel from "/components/AccordionPanel";
import TaskItem from "/components/TaskItem";

function getCompletedTaskRatio(tasks) {
  const completedTasks = tasks.filter((task) => task.completionDate);
  return `${completedTasks.length}/${tasks.length}`;
}

function getCompletedTaskPercentage(tasks) {
  const completedTasks = tasks.filter((task) => task.completionDate);
  return toPercentage(completedTasks.length / tasks.length);
}

export default function EngagementsList(props) {
  const { data, sortKey } = props;
  const sortedData = sortArrayByObjKey(data, sortKey);

  const [openPanelId, setOpenPanelId] = useState(false);

  return (
    <Accordion>
      {sortedData.map((engagement) => (
        <AccordionPanel
          key={engagement.id}
          headingLabel={engagement.name}
          isOpen={openPanelId === engagement.id}
          onClick={() =>
            setOpenPanelId(
              engagement.id !== openPanelId ? engagement.id : false
            )
          }
          meta={
            engagement.tasks && engagement.tasks.length
              ? [
                  {
                    label: "ETA",
                    value: engagement.eta,
                  },
                  {
                    label: "Tasks",
                    value: getCompletedTaskRatio(engagement.tasks),
                  },
                  {
                    label: "Progress",
                    value: getCompletedTaskPercentage(engagement.tasks),
                  },
                ]
              : []
          }
        >
          <div className="accordion-panel-column">
            <h3 className="u-font-md">Description</h3>
            <p className="u-font-xs">{engagement.description}</p>
          </div>

          <div className="accordion-panel-column">
            <h3 className="u-font-md">Tasks</h3>

            {engagement.tasks && engagement.tasks.length ? (
              <ul className="task-list">
                {engagement.tasks.map((task) => (
                  <TaskItem
                    completionDate={task.completionDate}
                    key={`${engagement.description}-${task.title}`}
                  >
                    {task.title}
                  </TaskItem>
                ))}
              </ul>
            ) : (
              <p>No tasks yet</p>
            )}
          </div>
        </AccordionPanel>
      ))}
    </Accordion>
  );
}