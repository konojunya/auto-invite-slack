var fs = require("fs")
var querystring = require('querystring')
var request = require('request')
var urler = require('url')

fs.readFile("./member.csv","utf8",(err,members)=>{
	if(err) throw err;
	members = members.split("\n")
	members.map((member)=>{
		invite(member)
	})
})

function invite(email){
	var option = {
		url: "https://slack.com/api/users.admin.invite",
		qs: {
			token: process.env.TECH_LOGICS_SLACK_TOKEN,
			email: email,
			set_active: true
		}
	}

	request.post(option,(err,res,body)=>{
		if(err){
			console.log(err)
		}else{
			console.log(email+"を招待しました。")
		}
	})
}