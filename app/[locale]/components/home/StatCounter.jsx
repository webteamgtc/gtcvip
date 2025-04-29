import React from 'react'

const StatCounter = () => {
  return (
    <div>
      <iframe 
        src="https://fxpricing.com/fx-widget/ticker-tape-widget.php?id=1,2,3,5,14,20,16,18,21&border=show&speed=50&fcs_link=hide&click_target=disable&theme=light&tm-cr=FFFFFF&hr-cr=FACF48&by-cr=28A745&sl-cr=DC3545&flags=circle&d_mode=compact-name&column=ask,bid,spread,chg&lang=en&font=Arial, sans-serif&widget_key=wig_jgHtMnfHf6nvJGGku" 
        width="100%" 
        height="85" 
        style={{ border: 'unset' }}
        frameBorder="0" // added frameBorder for React compatibility
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default StatCounter