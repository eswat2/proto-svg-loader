import { Component, Element, h, Prop } from '@stencil/core';
import 'proto-ikons-wc';
import { icons, ikons } from 'proto-ikons-wc';

const getIcon = (label: string) => {
  const name = label.toLowerCase().split(' ').join('-');
  const icon = `${name}-icon`;
  const ikon = `${name}-ikon`;

  return icons.includes(icon)
    ? icon
    : ikons.includes(ikon)
    ? ikon
    : 'slug-icon';
};

@Component({
  tag: 'proto-svg-loader',
  styleUrl: 'proto-svg-loader.css',
  shadow: true,
})
export class ProtoSvgLoader {
  @Prop() hex: string = 'currentColor';
  @Prop() name: string = 'slug';
  @Prop() size: number = undefined;

  @Element() el: HTMLElement;

  render() {
    const { name, hex, size } = this;

    // NOTE:  we are explicitly setting undefined if no size is provided...
    this.el.style.setProperty(
      '--proto-ikon-size',
      size ? `${size}px` : undefined,
    );

    const Tag = getIcon(name);

    return (
      <div class="ikonBox">
        <Tag hex={hex} size={size} />
      </div>
    );
  }
}