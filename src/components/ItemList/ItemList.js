import React, { useState } from 'react';
import styles from './ItemList.module.css';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { arrayMoveMutable } from 'array-move';
import Item from '../Item/Item';

let items = [
  {
    id: 1,
    text: 'Item 1',
    color: 'red',
  },
  {
    id: 2,
    text: 'Item 2',
    color: 'green',
  },
  {
    id: 3,
    text: 'Item 3',
    color: 'blue',
  },
  {
    id: 4,
    text: 'Item 4',
    color: 'orange',
  },
  {
    id: 5,
    text: 'Item 5',
    color: 'purple',
  },
  {
    id: 6,
    text: 'Item 6',
    color: 'grey',
  },
];

let correctIdOrder = '1-2-4-5-6-3';

const Itemlist = () => {
  const [victory, setVictory] = useState(false);
  const handleDragEnd = (result) => {
    arrayMoveMutable(items, result.source.index, result.destination.index);
    if (items.map((item) => item.id).join('-') === correctIdOrder)
      setVictory(true);
    else setVictory(false);
  };
  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId='1' direction='horizontal'>
        {(provided) => (
          <div
            className={styles.container}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {items.map((item, index) => (
              <Item key={item.id} item={item} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
      <h2>{victory ? 'Victoire !' : "Ce n'est pas la bonne combinaison :/"}</h2>
    </DragDropContext>
  );
};

export default Itemlist;
