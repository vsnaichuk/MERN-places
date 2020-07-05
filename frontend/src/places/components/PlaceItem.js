import React, { useState } from 'react';
import { generatePath } from 'react-router-dom';
import { routes } from '../../routes';
import s from './PlaceItem.module.scss';
import Card from '../../shared/components/UIElements/Card';
import Button from '../../shared/components/FormElements/Button';
import Modal from '../../shared/components/UIElements/Modal';

const PlaceItem = ({
  id,
  title,
  descr,
  image,
  address,
  location,
  creatorId,
}) => {
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => {
    setShowMap(true);
  };

  const closeMapHandler = () => {
    setShowMap(false);
  };

  return (
    <>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        contentClass={s.placeModalContent}
        footerClass={s.placeModalActions}
        header={address}
        footer={<Button onClick={closeMapHandler}>CLOSE</Button>}
      >
        <div className={s.mapContainer}>
          <h2>The Map</h2>
        </div>
      </Modal>

      <li className={s.placeItem}>
        <Card className={s.placeContent}>
          <div className={s.placeImage}>
            <img src={image} alt={title} />
          </div>

          <div className={s.placeInfo}>
            <h2>{title}</h2>
            <h3>{address}</h3>
            <p>{descr}</p>
          </div>

          <div className={s.placeActions}>
            <Button onClick={openMapHandler} inverse>
              VIEW ON MAP
            </Button>

            <Button
              to={generatePath(routes.EDIT_PLACE, { placeId: id })}
            >
              EDIT
            </Button>

            <Button danger>DELETE</Button>
          </div>
        </Card>
      </li>
    </>
  );
};

export default PlaceItem;
