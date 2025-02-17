import { FC } from 'react';
import { OfferListItemProps } from '../../types';
import { RoutePath } from '../../../../routes/routes';
import { Link, useNavigate } from 'react-router-dom';

export const OffersCardItem:FC<OfferListItemProps> = ({id, price, title, previewImage, type, rating, isPremium}) => {

  const navigate = useNavigate();

  //FIXME: на следующем шаге вынести в отдельные функции и константы в отдельном файле + написать тесты на функции
  const typeRoom = `${type[0].toUpperCase()}${type.slice(1)}`;

  const ratingStars = `${Math.round(rating) / 5 * 100}%`;

  const handleClick = () => navigate(RoutePath.offer.replace(':id', String(id)));

  return (
    <article className="cities__card place-card">
      {isPremium && (
        <div className="place-card__mark">
          <span>Premium</span>
        </div>
      )}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img className="place-card__image" src={previewImage} width="260" height="200" alt="Place image"/>
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: ratingStars}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={RoutePath.offer} onClick={handleClick}>{title}</Link>
        </h2>
        <p className="place-card__type">{typeRoom}</p>
      </div>
    </article>
  );
};
