type listOfPeople = {
  lists: {
    first: string;
    last: string;
  }[];
};

export const PersonList = (props: listOfPeople) => {
  return (
    <div>
      {props.lists.map((list) => {
        return (
          <h1 key={list.first}>
            {list.first}
            {list.last}
          </h1>
        );
      })}
    </div>
  );
};
