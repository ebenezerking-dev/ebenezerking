// ===================================
// SOCIAL ICONS
// src/email/components/socialIcons.js
// ===================================
import { EMAIL_ASSETS } from "../../email/assets/emailAssets.js";

// ===================================
export const socialIcons = `
<!--  GITHUB -->
  <div style="display:inline-block; margin-right: 3px; vertical-align:bottom; line-height:0;">
    <a href="https://github.com/ebenezerking-dev" style="display: inline-block;">
      <img 
        src="${EMAIL_ASSETS.github}" 
		alt="GitHub"
        class="social-icon"
      	style="display:block; border:0; width:17px; height:17px;"
      />
    </a>
  </div>

<!--  LINKEDIN -->
 <div style="display:inline-block; margin-right: 3px; vertical-align:bottom; line-height:0;">
    <a href="https://www.linkedin.com/in/ebenezerking" style="display: inline-block;">
      <img 
        src="${EMAIL_ASSETS.linkedin}" 
		alt="LinkedIn"
        class="social-icon"
      	style="display:block; border:0; width:17px; height:17px;"
        
      />
    </a>
  </div>
  
<!--  TWITTER -->
 <div style="display:inline-block; margin-right: 3px; vertical-align:bottom; line-height:0;">
    <a href="https://x.com/a_devlin" style="display: inline-block;">
      <img 
        src="${EMAIL_ASSETS.twitter}" 
		alt="X (Twitter)"
        class="social-icon"
      	style="display:block; border:0; width:17px; height:17px;"
      />
    </a>
  </div>
   
 <!--  WHATSAPP -->
<div style="display:inline-block; margin-right: 3px; vertical-align:bottom; line-height:0;">
  <a href="https://wa.me/message/UHRWC3UBMMB2E1" style="display:inline-block;">
    <img 
      src="${EMAIL_ASSETS.whatsapp}" 
      alt="WhatsApp"
	  class="social-icon"
      style="display:block; border:0; width:17px; height:17px;"
    />
  </a>
</div>
`;
