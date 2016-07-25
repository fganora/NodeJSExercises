'use strict';

/* 
 	Module message
*/

function Message(payload, businessID) {
	this._payload = payload;
	this._businessID = businessID;

}	

Message.prototype = {
	
	getPayload: function () {
		return this._payload;
	},

	getPayloadAsJSON:  function() {
		return (JSON.stringify(this._payload));
	},

	toString: function() {
		 return JSON.stringify(this);
	},

	getBusinessID () {
		return this._businessID;
	},

	setBusinessID (businessID) {
		this._businessID = businessID;
	}

};

module.exports = Message;