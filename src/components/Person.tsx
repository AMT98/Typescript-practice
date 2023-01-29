type personInfo = {
  name: {
    first: string;
    last: string;
  };
};

export const Person = (props: personInfo) => {
  return (
    <div>
      {props.name.first} {props.name.last}
    </div>
  );
};
