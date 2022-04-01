import { Instance } from './Instance.mjs'

/**
 * @typedef {import('./Player.mjs').Player} Player
 */

/**
 * @class
 * @inheritdoc
 * 
 * @shortdescription The Roblox's client handler
 * @classdesc The Players game service contains only Player objects for presently connected clients to a Roblox game server.
 * Inharates {@link Instance}
 * 
 * @todo Finish short descriptions
 */
export class Players extends Instance {
	constructor() {
		
		super()
		
		/**
		 * @type {Boolean}
		 *
		 *  [readonly] [notreplicated]
		 * Indicates whether or not bubble chat is enabled. It is set with the Players:SetChatStyle method.
		 */
		this.BubbleChat
		
		/**
		 * @type {Boolean} 
		 *
		 *  [notreplicated]
		 * Indicates whether Characters will respawn automatically.
		 */
		this.CharacterAutoLoads
		
		/**
		 * @type {Boolean} 
		 *
		 *  [readonly] [notreplicated]
		 * Indicates whether or not classic chat is enabled; set by the Players:SetChatStyle method.
		 */
		this.ClassicChat

		/*
		 * @type {Player} 
		 *
		 *  [readonly] [notreplicated]
		 * The Player that the LocalScript is running for.
		 */		
		this.LocalPlayer
		
		/*
		 * @type {Number} 
		 *
		 *  [readonly] [notreplicated]
		 * The maximum amount of players that can be in this server.
		 */
		this.MaxPlayers

		/*
		 * @type {Number} 
		 *
		 *  [hidden]
		 * Players.MaxPlayers for Numberernal use.
		 */
		this.MaxPlayersNumberernal

		/*
		 * @type {Number}  
		 *
		 *  [readonly] [notreplicated]
		 * The preferred amount of players for this server.
		 */
		this.PreferredPlayers

		/*
		 * @type {Number}  
		 *
		 *  [hidden]
		 * Players.PreferredPlayers for Numberernal use.
		 */
		this.PreferredPlayersNumberernal

		/*
		 * @type {Number}  
		 *
		 * Controls the amount of time taken for a players character to respawn
		*/
		this.RespawnTime
	}
}