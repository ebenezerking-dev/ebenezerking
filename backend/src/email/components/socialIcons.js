// ===================================
// SOCIAL ICONS
// src/email/components/socialIcons.js
// ===================================
import { EMAIL_ASSETS } from "../../email/assets/emailAssets.js";

// ===================================
export const socialIcons = `
<!--  GITHUB -->
  <div style="display: inline-block; margin: 0 4px; text-align: center; height: 20px;">
    <a href="https://github.com/ebenezerking-dev" style="display: inline-block; transition: transform 0.2s;">
      <img 
        src="${EMAIL_ASSETS.github}" 
        width="20" 
        class="social-icon"
        style="display: block; width: 20px; max-height: 20px; transition: opacity 0.2s;"
        alt="GitHub"
      />
    </a>
  </div>

<!--  LINKEDIN -->
  <div style="display: inline-block; margin: 0 4px; text-align: center; height: 20px;">
    <a href="https://www.linkedin.com/in/ebenezerking" style="display: inline-block;">
      <img 
        src="${EMAIL_ASSETS.linkedin}" 
        width="20" 
        class="social-icon"
        style="display: block; width: 20px; max-height: 20px;"
        alt="LinkedIn"
      />
    </a>
  </div>
  
<!--  TWITTER -->
  <div style="display: inline-block; margin: 0 4px; text-align: center; height: 20px;">
    <a href="https://x.com/a_devlin" style="display: inline-block;">
      <img 
        src="${EMAIL_ASSETS.twitter}" 
        width="20" 
        class="social-icon"
        style="display: block; width: 20px; max-height: 20px;"
        alt="X (Twitter)"
      />
    </a>
  </div>
   
 <!--  WHATSAPP -->
  <div style="display: inline-block; margin: 0 4px; text-align: center; height: 20px;">
    <a href="https://wa.me/message/UHRWC3UBMMB2E1" style="display: inline-block;">
      <img 
        src="${EMAIL_ASSETS.whatsapp}" 
        width="20" 
        class="social-icon"
        style="display: block; width: 20px; max-height: 20px;"
        alt="WhatsApp"
      />
    </a>
  </div>
`;
