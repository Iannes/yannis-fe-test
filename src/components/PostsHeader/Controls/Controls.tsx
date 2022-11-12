import React from "react";
import classNames from "classnames";
import { setSortDirection } from "src/lib/actions/setSortDirection";
import { usePosts } from "src/lib/contexts/PostsProvider";
import { SORT_DIRECTION } from "src/lib/utils/sortBy";
import "./Controls.css";

export const Controls = () => {
  const { dispatch } = usePosts();
  const [active, setActive] = React.useState({
    [SORT_DIRECTION.ASC]: true,
    [SORT_DIRECTION.DESC]: false,
  });

  const handleSortOrder = (direction: number) => {
    // Local [active, setActive] state is used to toggle active className
    const newSortDirection = !active[direction as keyof typeof active];
    setActive({
      ...active,
      [direction]: newSortDirection,
      [-direction]: !newSortDirection,
    });

    // set sortOrder globally
    dispatch(setSortDirection(direction));
  };

  const ascendingClassNames = classNames({
    active: active[SORT_DIRECTION.ASC],
  });
  const descendingClassNames = classNames({
    active: active[SORT_DIRECTION.DESC],
  });

  return (
    <>
      <button
        onClick={() => handleSortOrder(SORT_DIRECTION.ASC)}
        className="controls"
        tabIndex={0}
      >
        <img
          src="/up.svg"
          width={25}
          height={25}
          alt="sort posts by ascending order"
          className={ascendingClassNames}
        />
      </button>
      <button
        onClick={() => handleSortOrder(SORT_DIRECTION.DESC)}
        className="controls"
        tabIndex={0}
      >
        <img
          src="/down.svg"
          width={25}
          height={25}
          alt="sort posts by descending order"
          className={descendingClassNames}
        />
      </button>
    </>
  );
};
