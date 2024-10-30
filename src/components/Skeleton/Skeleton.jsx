import style from './Skeleton.module.scss';
import ContentLoader from 'react-content-loader';

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={270}
    height={530}
    viewBox="0 0 270 530"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    className={style.skeleton}
  >
    <circle cx="130" cy="120" r="110" />
    <rect x="50" y="255" rx="10" ry="10" width="160" height="30" />
    <rect x="10" y="310" rx="10" ry="10" width="250" height="100" />
    <rect x="20" y="465" rx="10" ry="10" width="65" height="30" />
    <rect x="120" y="460" rx="21" ry="21" width="140" height="44" />
  </ContentLoader>
);

export default Skeleton;
