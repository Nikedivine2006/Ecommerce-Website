import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./FooterStyles";

const Footer = () => {
return (
	<Box>

	<Container>
		<Row>
		<Column>
			<Heading>Home</Heading>
			<FooterLink href="#">About-Us</FooterLink>
			<FooterLink href="#">Shop</FooterLink>
			<FooterLink href="#">Blog</FooterLink>
		</Column>
		<Column>
			<Heading>Services</Heading>
			<FooterLink href="#"></FooterLink>
			<FooterLink href="#">Affliating Market</FooterLink>
			<FooterLink href="#">Payment Service</FooterLink>
			<FooterLink href="#">Fast Delivery</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="#">Testimonials</FooterLink>
			<FooterLink href="#">Nigeria</FooterLink>
			<FooterLink href="#">USA</FooterLink>
			<FooterLink href="#">Mumbai</FooterLink>
		</Column>
		<Column>
			<Heading>Social Media</Heading>
			<FooterLink href="#">
			<i className="fab fa-facebook-f">
				<span style={{ marginLeft: "10px" }}>
				Facebook
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-instagram">
				<span style={{ marginLeft: "10px" }}>
				Instagram
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-twitter">
				<span style={{ marginLeft: "10px" }}>
				Twitter
				</span>
			</i>
			</FooterLink>
			<FooterLink href="#">
			<i className="fab fa-youtube">
				<span style={{ marginLeft: "10px" }}>
				Youtube
				</span>
			</i>
			</FooterLink>
		</Column>
		</Row>
	</Container>
	</Box>
);
};
export default Footer;
