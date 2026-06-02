// ===================================
// AUTO REPLY TEMPLATE
// src/email/templates/autoReply.js
// ===================================
import { emailBase } from "./emailBase.js";
import { EMAIL_ASSETS } from "../../email/assets/emailAssets.js";
import { socialIcons } from "../components/socialIcons.js";

// ===================================
export const autoReplyTemplate = (name) => {
	const header = `
		<img
			src="${EMAIL_ASSETS.header}"
			width="600"
			style="display:block;width:100%;max-width:600px;border:0;"
		/>
	`;

	const body = `
		<h3 style="font-size:20px;font-weight:700;margin:0 0 20px 0;">
  					🎉 Hi ${name} 🎉
		</h3>

		<p style="font-size:16px;">
  					I’ve received your message and will get back to you shortly.
		</p>

		<p style="font-size:16px;">
			Feel free to check out my portfolio in the meantime.
		</p>
	`;

	const footer = `
	<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">
	<tr>
	<td
		background="${EMAIL_ASSETS.footer}"
		style="
			background-image:url('${EMAIL_ASSETS.footer}');
			background-size:cover;
			background-position:center;
			padding:25px;
		"
	>

	<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0">

	<!-- ROW 1 -->
	<tr>

		<td width="50%" align="left" valign="middle" style="padding:10px;">
				<img src="${EMAIL_ASSETS.logo}" width="120" style="display:block;border:0;" />
		</td>

		<td width="50%" align="right" valign="middle" style="padding:10px;">
			<div style="text-align:right;">
				${socialIcons}

				<p style="margin:8px 0 0;">
					<a
						href="https://ebenezerking.com"
						style="color:#00485d;font-size:15px;font-weight:700;text-decoration:underline;"
					>
						ebenezerking.com
					</a>
				</p>
			</div>
		</td>

	</tr>

	<!-- COPYRIGHT -->
	<tr>
		<td colspan="2" align="center" style="padding-top:15px;">
			<p style="margin:0;font-size:12px;font-weight:600;color:#00485d;">
				© ${new Date().getFullYear()} Ebenezer King
			</p>
		</td>
	</tr>

	</table>

	</td>
	</tr>
	</table>
	`;

	return emailBase({ header, body, footer });
};