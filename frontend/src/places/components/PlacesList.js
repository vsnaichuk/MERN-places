import React from 'react';
import Card from '../../shared/components/UIElements/Card';
import PlaceItem from './PlaceItem';
import Button from '../../shared/components/FormElements/Button';
import s from './PlacesList.module.scss';

const PlacesList = ({ items }) => {
  if (items.length === 0) {
    return (
      <div className={`${s.placesList} center`}>
        <Card>
          <h2 className={s.noPlace}>
            No places found. Maybe create one?
          </h2>

          <Button>Share Place</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className={s.placesList}>
      {items.map((place) => {
        return (
          <PlaceItem
            key={place.id}
            id={place.id}
            title={place.title}
            descr={place.description}
            image={place.imageUrl}
            address={place.address}
            coordinates={place.location}
            creatorId={place.creator}
          />
        );
      })}
    </ul>
  );
};

export default PlacesList;