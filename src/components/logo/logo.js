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
  }

  componentWillUnmount() {
    window.removeEventListener('mousemove', Logo.onMousemove.bind(this));
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
}

export default Logo;
