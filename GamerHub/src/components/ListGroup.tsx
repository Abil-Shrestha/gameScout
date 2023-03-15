import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

const ListGroup = ({items, heading}:ListGroupProps) => {

  const[selectedIndex, setSelectedIndex] = useState<number>(-1);

  const handleClick = (e: MouseEvent) =>{
    console.log(e);
  }

  return (
    <>
      <h1>{heading}</h1>
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((i,id) => (
          <li className={selectedIndex === id ? 'list-group-item active' : 'list-group-item'} onClick={()=>setSelectedIndex(id)} key={id}>{i}</li>
        ))}
      </ul>
    </>
  );
};

export default ListGroup;
