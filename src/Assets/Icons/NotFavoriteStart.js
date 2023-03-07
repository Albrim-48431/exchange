import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function NotFavoriteStart(props) {
  return (
    <Svg
      width={24}
      height={22}
      viewBox="0 0 24 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M12 .324l2.6 7.999.021.069h8.483l-6.803 4.944-.06.042.023.07 2.6 7.998-6.805-4.943L12 16.46l-.059.043-6.804 4.943 2.599-7.999.022-.069-.058-.043L.895 8.393h8.483l.023-.07L12 .325z"
        fill="#D9D9D9"
        stroke="#000"
        strokeWidth={0.2}
      />
    </Svg>
  );
}

export default NotFavoriteStart;
