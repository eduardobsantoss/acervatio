import { PLANE_PATH } from '../utils/motion';

export default function PlaneArrow({ dir }) {
  return (
    <svg className={`pa ${dir === 'left' ? 'pa-l' : 'pa-r'}`} viewBox="0 0 24 24" aria-hidden="true">
      <path d={PLANE_PATH} />
    </svg>
  );
}
