import {EDITIONS} from "../consts/consts";

// import stalker from '../../../../components/img/stalker.png';

const initialState = {
	edition: 'ULTIMATE',
	price: 1599,
	title: 'ULTIMATE EDITION',
	image: '../../../components/img/stalker.png',
	text: 'S.T.A.L.K.E.R. 2: Heart of Chernobyl is a sequel to the critically acclaimed survival-horror FPS series, set in an alternative version of the Chernobyl Exclusion Zone. Reveal a new chapter in the history of the Zone and delve into a nonlinear branching story in an open post-apocalyptic world. Fight for survival with various foes and hazardous radioactive environments, forging your own path through anomalies and opponents to the legendary Heart of Chernobyl.',
    text_2: 'The Digital Ultimate Edition includes all digital bonuses from the rest of the editions, even more character and weapon skins, and access to two upcoming story expansions along with all the additional downloadable content.',
	bonuses: [
		false,
		false,
		false,
		false,
		false,
		false,
		false,
		false,
	]
};

export interface IAction {
	type: EDITIONS
}

export interface IState {
	[key: string]: any
}

const reducer = (state: IState, action: IAction) => {
	switch (action.type) {

		case EDITIONS.STANDARD:
			return {
				...state,
				price: 895,
				title: 'STANDARD EDITIONS',
                image: '../../../components/img/stalker_3.png',
				text: 'S.T.A.L.K.E.R. 2: Heart of Chernobyl is a sequel to the critically acclaimed survival-horror FPS series, set in an alternative version of the Chernobyl Exclusion Zone. Reveal a new chapter in the history of the Zone and delve into a nonlinear branching story in an open post-apocalyptic world. Fight for survival with various foes and hazardous radioactive environments, forging your own path through anomalies and opponents to the legendary Heart of Chernobyl.',
				text_2: 'The Standard Digital Edition provides access to the complete game, includes a set of preorder bonuses and exclusive content for the Steam platform: a dynamic theme, an animated avatar, and a frame to distinguish a true S.T.A.L.K.E.R. among his peers.',
				edition: 'STANDARD',
				bonuses: [
					false,
					true,
					true,
					true,
					true,
					false,
					true,
					true,
					true,
				]
			};

		case EDITIONS.DELUXE:
			return {
				...state,
				price: 1199,
				title: 'DELUXE EDITION',
                image: '../../../components/img/stalker_2.png',
                text: 'S.T.A.L.K.E.R. 2: Heart of Chernobyl is a sequel to the critically acclaimed survival-horror FPS series, set in an alternative version of the Chernobyl Exclusion Zone. Reveal a new chapter in the history of the Zone and delve into a nonlinear branching story in an open post-apocalyptic world. Fight for survival with various foes and hazardous radioactive environments, forging your own path through anomalies and opponents to the legendary Heart of Chernobyl.',
				text_2: 'The Digital Deluxe Edition provides access to the complete game, includes an exclusive side mission, set of preorder bonuses and exclusive content for the Steam platform, digital artbook, game soundtrack, character, and weapon skins for both singleplayer and multiplayer experience.',
				edition: 'DELUXE',
				bonuses: [
					false,
					false,
					false,
					false,
                    true,
                    false,
                    false,
                    false,
                    true,

				]
			};

		case EDITIONS.ULTIMATE:

			return {
				...state,
				price: 1599,
				title: 'ULTIMATE EDITION',
                image: '../../../components/img/stalker.png',
                text: 'S.T.A.L.K.E.R. 2: Heart of Chernobyl is a sequel to the critically acclaimed survival-horror FPS series, set in an alternative version of the Chernobyl Exclusion Zone. Reveal a new chapter in the history of the Zone and delve into a nonlinear branching story in an open post-apocalyptic world. Fight for survival with various foes and hazardous radioactive environments, forging your own path through anomalies and opponents to the legendary Heart of Chernobyl.',
				text_2: 'The Digital Ultimate Edition includes all digital bonuses from the rest of the editions, even more character and weapon skins, and access to two upcoming story expansions along with all the additional downloadable content.',
				edition: 'ULTIMATE',
				bonuses: [
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
                    false,
				]
			}
	}
};

export {reducer, initialState};