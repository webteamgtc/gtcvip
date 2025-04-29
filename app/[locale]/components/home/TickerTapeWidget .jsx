import React from 'react';

const TickerTapeWidget = () => {
  return (
    <div>
      <iframe
        src="https://fxpricing.com/fx-widget/ticker-tape-widget.php?id=1,2,3,5,14,20,16,18,21&border=show&speed=50&fcs_link=hide&click_target=disable&theme=light&tm-cr=F2F2F2&hr-cr=FFFFFF&by-cr=000000&sl-cr=F2F2F2&flags=circle&d_mode=compact-name&column=ask,bid,spread,chg&lang=en&font=Arial, sans-serif&widget_key=wig_jgHtMnfHf6nvJGGku"
        width="100%"
        height="85"
        style={{ border: 'none' }}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default TickerTapeWidget;
