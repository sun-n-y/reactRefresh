import { toast } from 'react-toastify';

const SinglColor = ({ index, color }) => {
  const { hex, weight } = color;

  const saveToClipBoard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success('copied');
      } catch (error) {
        toast.error('failed to copy');
      }
    } else {
      toast.error('clipboard not available ');
    }
  };

  return (
    <article
      onClick={saveToClipBoard}
      className={index > 10 ? 'color color-light' : 'color'}
      style={{ backgroundColor: `#${hex}` }}
    >
      <p className="percent-value">{weight}%</p>
      <p className="percent-value">#{hex}</p>
    </article>
  );
};
export default SinglColor;
