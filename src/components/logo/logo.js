import React from 'react'
import * as styles from './logo.module.scss'

class Logo extends React.Component {
  render() {
    return (
      <div className={styles.glob}>
        <div className={styles.wrapper}>
          <div className={styles.bars}/>
          <div className={styles.boxTransformer}>
            <div className={styles.box}/>
          </div>
        </div>
      </div>);
  }

  componentDidMount() {
    window.addEventListener('mousemove', Logo.onMousemove.bind(this));
    if (window.DeviceMotionEvent !== undefined) {
      window.addEventListener('devicemotion', Logo.onDeviceMotion.bind(this));
    }
  }

  componentWillUnmount() {
    window.removeEventListener('devicemotion', Logo.onMousemove.bind(this));
    if (window.DeviceMotionEvent !== undefined) {
      window.removeEventListener('devicemotion', Logo.onDeviceMotion.bind(this));
    }
  }

  static onMousemove(e) {
    const x = e.pageX - (window.innerWidth / 2);
    const y = e.pageY - (window.innerHeight / 2);
    Logo.doAwesome(x, y, 0.1, `.${styles.boxTransformer}`);
    Logo.doAwesome(x, y, 0.05, `.${styles.bars}`);
  }

  static doAwesome(mouseX,mouseY,sensitivityMultiplier = 1,selector) {
    const ele = document.querySelectorAll(selector);
    if (!ele.length) return;

    const div = ele[0];

    const transform = `translate(${mouseX * sensitivityMultiplier}px, ${mouseY * sensitivityMultiplier}px)`;;
    div.style.webkitTransform = transform;
    div.style.transform = transform;
  }

  static onDeviceMotion(e) {
    const x = Math.max(-2, Math.min(e.accelerationIncludingGravity.x, 2)) * 100;
    const y = Math.max(-2, Math.min(e.accelerationIncludingGravity.y, 2)) * 100;
    Logo.doAwesome(x, y, 0.1, `.${styles.boxTransformer}`);
    Logo.doAwesome(x, y, 0.05, `.${styles.bars}`);
  }
}

export default Logo;
