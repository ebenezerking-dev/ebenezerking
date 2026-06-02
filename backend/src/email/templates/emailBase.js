// ===================================
// EMAIL BASE TEMPLATE
// src/email/templates/emailBase.js
// ===================================
export const emailBase = ({ header, body, footer }) => `
  <div style="font-family:Tinos,Arial,sans-serif;background:#f6f7fb;padding:20px;">

    <div style="max-width:600px;margin:auto;background:#fff;border-radius:12px;overflow:hidden;box-shadow:0 10px 25px rgba(0,0,0,0.08);">

      ${header}

      <div style="padding:25px;color:#22050c;">
        ${body}
      </div>

      ${footer}

    </div>
  </div>
`;
