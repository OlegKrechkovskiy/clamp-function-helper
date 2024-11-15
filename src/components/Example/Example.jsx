import { useEffect, useState } from 'react';
import styles from './Example.module.scss';

const Example = () => {
  const [fontSize, setFontSize] = useState(0);
  const [height, setHeight] = useState(0);
  const [width, setWidth] = useState(0);
  const [borderRadius, setBorderRadius] = useState(0);

  useEffect(() => {
    let block = document.querySelector(`[data-block]`);
    const handleResize = () =>
      setFontSize(
        window.getComputedStyle(block, null).getPropertyValue('font-size')
      );
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let block = document.querySelector(`[data-block]`);
    const handleResize = () =>
      setHeight(
        window.getComputedStyle(block, null).getPropertyValue('height')
      );
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let block = document.querySelector(`[data-block]`);
    const handleResize = () =>
      setWidth(window.getComputedStyle(block, null).getPropertyValue('width'));
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    let block = document.querySelector(`[data-block]`);
    const handleResize = () =>
      setBorderRadius(
        window.getComputedStyle(block, null).getPropertyValue('border-radius')
      );
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className='container'>
        <h2 className={styles['block-title']}>
          Пример блока с адаптивными размерами
        </h2>
        <div className={styles['block']} data-block>
          <div className={styles['block-info']}>
            <p className={styles['block-width']}>
              Block width:{' '}
              <span>
                <strong>{width}</strong>
              </span>
            </p>
            <p className={styles['block-height']}>
              Block height:{' '}
              <span>
                <strong>{height}</strong>
              </span>
            </p>
            <p>
              Font size:{' '}
              <span>
                <strong>{fontSize}</strong>
              </span>
            </p>
            <p className={styles['border-radius']}>
              Border radius:{' '}
              <span>
                <strong>{borderRadius}</strong>
              </span>
            </p>
          </div>
          <div className={styles['line-block-width']}></div>
          <div className={styles['line-block-height']}></div>
          <div className={styles['line-bor-radius']}></div>
        </div>
      </div>
    </div>
  );
};

export default Example;
