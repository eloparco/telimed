(this.webpackJsonptelimedemo=this.webpackJsonptelimedemo||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),c=a(8),o=a.n(c),d=(a(14),a(6)),r=a(2),s=a(3),l=a(5),u=a(4),v=(a(15),a(1)),m=a.n(v),p=function(e,t,a,n,i){var c=m.a.get(t,e,n),o=m.a.get(a,e,n);return m.a.isFunction(i)&&(c=i(m.a,c),o=i(m.a,o)),{Current:c,Previous:o,HasChanged:c!==o}},f=(a(18),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).onTrackStoppedEvent=function(e){console.log("Track Stopped")},n.onTrackAudioOutputChangedEvent=function(e){console.log("Track ".concat(e," audio output changed"))},n.updateLocalTrack=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"clear";if("clear"===t){var a=m.a.find(n.trackList,{deviceId:e});if(a)switch(a.getType()){case"audio":n.micRef.current&&(a.detach(n.micRef.current),a.removeEventListener(window.JitsiMeetJS.events.track.LOCAL_TRACK_STOPPED,n.onTrackStoppedEvent),a.removeEventListener(window.JitsiMeetJS.events.track.TRACK_AUDIO_OUTPUT_CHANGED,n.onTrackAudioOutputChangedEvent),a.dispose());break;case"video":n.videoRef.current&&(a.detach(n.videoRef.current),a.dispose())}}else if("set"===t){var i=m.a.find(n.trackList,(function(t){return t.deviceId===e}));if(i)switch(i.getType()){case"audio":n.micRef.current&&(i.attach(n.micRef.current),i.addEventListener(window.JitsiMeetJS.events.track.LOCAL_TRACK_STOPPED,n.onTrackStoppedEvent),i.addEventListener(window.JitsiMeetJS.events.track.TRACK_AUDIO_OUTPUT_CHANGED,n.onTrackAudioOutputChangedEvent),i.mute());break;case"video":i&&n.videoRef.current&&i.attach(n.videoRef.current)}}},n.onCameraChange=function(e){n.setState({selectedVideoDeviceId:e.target.value})},n.onMicrophoneChange=function(e){n.setState({selectedMicDeviceId:e.target.value})},n.state={selectedMicDeviceId:"none",selectedVideoDeviceId:"none",loaded:!1},n.videoRef=i.a.createRef(),n.micRef=i.a.createRef(),n.trackList=[],n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.deviceList,n=void 0===a?[]:a,i=t.defaultMicId,c=t.defaultVideoId,o=t.activeRoomId;window.JitsiMeetJS.createLocalTracks({devices:["audio","video"]}).then((function(t){var a,r=m.a.map(n,(function(e){return e.id})),s=Object(d.a)(t);try{for(s.s();!(a=s.n()).done;){var l=a.value;-1!==m.a.indexOf(r,l.deviceId)&&e.trackList.push(l)}}catch(u){s.e(u)}finally{s.f()}e.setState({loaded:!0,deviceList:n,selectedMicDeviceId:i,selectedVideoDeviceId:c},(function(){if(e.updateLocalTrack(i,"set"),e.updateLocalTrack(c,"set"),o&&window.telimed.activeRoom){var t=m.a.find(e.trackList,(function(e){return e.deviceId===c})),a=m.a.find(e.trackList,(function(e){return e.deviceId===i}));t&&window.telimed.activeRoom.addTrack(t),a&&window.telimed.activeRoom.addTrack(a)}}))}))}},{key:"componentDidUpdate",value:function(e,t){var a=p("selectedVideoDeviceId",this.state,t,"");a.HasChanged&&(""!==a.Previous&&this.updateLocalTrack(a.Previous,"clear"),""!==a.Current&&this.updateLocalTrack(a.Current,"set"));var n=p("selectedMicDeviceId",this.state,t,"");n.HasChanged&&(""!==n.Previous&&this.updateLocalTrack(n.Previous,"clear"),""!==n.Current&&this.updateLocalTrack(n.Current,"set"));var i=p("activeRoomId",this.props,e,"");if(i.HasChanged&&i.Current&&window.telimed.activeRoom){var c=this.state,o=c.selectedMicDeviceId,d=c.selectedVideoDeviceId,r=m.a.find(this.trackList,(function(e){return e.deviceId===d})),s=m.a.find(this.trackList,(function(e){return e.deviceId===o}));r&&window.telimed.activeRoom.addTrack(r),s&&window.telimed.activeRoom.addTrack(s)}}},{key:"componentWillUnmount",value:function(){var e=this.state,t=e.selectedMicDeviceId,a=e.selectedVideoDeviceId;this.updateLocalTrack(t,"clear"),this.updateLocalTrack(a,"clear")}},{key:"render",value:function(){var e=this.state,t=e.selectedVideoDeviceId,a=e.selectedMicDeviceId,n=e.deviceList,c=void 0===n?[]:n;return i.a.createElement("div",{class:"local_track"},i.a.createElement("div",{class:"local_track_controls"},i.a.createElement("span",null,"Camera"),i.a.createElement("select",{value:t,onChange:this.onCameraChange},m.a.map(m.a.concat([{name:"none",id:"none",type:"none"}],m.a.filter(c,{type:"videoinput"})),(function(e){return i.a.createElement("option",{value:e.id},e.name)}))),i.a.createElement("span",null,"Microphone"),i.a.createElement("select",{value:a,onChange:this.onMicrophoneChange},m.a.map(m.a.filter(c,{type:"audioinput"}),(function(e){return i.a.createElement("option",{value:e.id},e.name)})))),i.a.createElement("div",{class:"local_track_body"},i.a.createElement("video",{autoPlay:"1",ref:this.videoRef})))}}]),a}(i.a.Component)),k=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).onSpeakerChanged=function(e){var t=n.props.onSpeakerChanged,a=n.state.speakerList,i=void 0===a?[]:a,c=e.target.value;n.setState({selectedSpeakerDeviceId:c},(function(){m.a.isFunction(t)&&t(m.a.find(i,{id:c})||{id:"none",name:"None"})}))},n.state={selectedSpeakerDeviceId:"",speakerList:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.deviceList,a=void 0===t?[]:t,n=e.defaultSpeakerId,i=e.onSpeakerChanged;this.setState({speakerList:m.a.filter(a,{type:"audiooutput"}),selectedSpeakerDeviceId:n},(function(){if(m.a.isFunction(i)){var e=m.a.find(a,{id:n});i(e)}}))}},{key:"render",value:function(){var e=this.state,t=e.selectedSpeakerDeviceId,a=e.speakerList;return i.a.createElement(i.a.Fragment,null,i.a.createElement("span",null,"Speaker"),i.a.createElement("select",{value:t,onChange:this.onSpeakerChanged},m.a.map(a,(function(e){return i.a.createElement("option",{value:e.id},e.name)}))))}}]),a}(i.a.Component),h=(a(19),function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).onTrackStoppedEvent=function(e){console.log("Track Stopped")},n.onTrackAudioOutputChangedEvent=function(e){console.log("Track ".concat(e," audio output changed"))},n.updateTrack=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"clear";if("clear"===t){if(e)switch(e.type){case"audio":n.micRef.current&&e.track.detach(n.micRef.current);break;case"video":n.videoRef.current&&e.track.detach(n.videoRef.current)}}else if("set"===t&&e)switch(e.type){case"audio":n.micRef.current&&e.track.attach(n.micRef.current);break;case"video":n.videoRef.current&&e.track.attach(n.videoRef.current)}},n.state={selectedVideoId:"",selectedMicId:""},n.videoRef=i.a.createRef(),n.micRef=i.a.createRef(),n.tracks=[],n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.trackIds,a=void 0===t?[]:t,n=e.selectedSpeakerDeviceId;this.tracks=m.a.filter(window.telimed.remoteTracks,(function(e){return-1!==m.a.indexOf(a,e.id)}));var i=m.a.find(this.tracks,{type:"video"}),c=m.a.find(this.tracks,{type:"audio"});if(i||c){var o={};i&&(this.updateTrack(i,"set"),o.selectedVideoId=i.id),c&&(this.updateTrack(c,"set"),o.selectedMicId=c.id,c.track.setAudioOutput(n)),this.setState(o)}}},{key:"componentDidUpdate",value:function(e){var t=p("trackIds",this.props,e,[]);if(m.a.map(t.Current,(function(e){return e.id})).join(",")!==m.a.map(t.Previous,(function(e){return e.id})).join(",")){var a=m.a.first(m.a.map(t.Current,(function(e){return e.participantId})));this.tracks=m.a.filter(window.telimed.remoteTracks,{participantId:a});var n=m.a.find(this.tracks,{type:"video"}),i=m.a.find(this.tracks,{type:"audio"}),c={};if(n){var o=this.state.selectedVideoId;if(n.id!==o){var d=m.a.find(this.tracks,{id:o});d&&this.updateTrack(d,"clear"),this.updateTrack(n,"set"),c.selectedVideoId=n.id}}if(i){var r=this.state.selectedMicId;if(i.id!==r){var s=this.props.selectedSpeakerDeviceId,l=m.a.find(this.tracks,{id:r});l&&this.updateTrack(l,"clear"),this.updateTrack(i,"set"),i.track.setAudioOutput(s),c.selectedMicId=i.id}}this.setState(c)}var u=p("selectedSpeakerDeviceId",this.props,e,"");if(u.HasChanged){var v=this.state.selectedMicId,f=m.a.find(this.tracks,{id:v});f&&f.track.setAudioOutput(u.Current)}}},{key:"componentWillUnmount",value:function(){var e=this.state,t=e.selectedVideoId,a=e.selectedMicId,n=m.a.find(this.tracks,{id:t});if(n)try{this.updateTrack(n,"clear")}catch(c){console.log(c.message)}var i=m.a.find(this.tracks,{id:a});if(i)try{this.updateTrack(i,"clear")}catch(c){console.log(c.message)}}},{key:"render",value:function(){return i.a.createElement("div",{class:"remote_track"},i.a.createElement("div",{class:"remote_track_controls"},i.a.createElement("span",null,"???")),i.a.createElement("div",{class:"remote_track_body"},i.a.createElement("video",{autoPlay:"1",ref:this.videoRef})),i.a.createElement("div",null,i.a.createElement("audio",{autoPlay:"1",ref:this.micRef})))}}]),a}(i.a.Component)),w=a(22),I=function(e){Object(l.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(r.a)(this,a),(n=t.call(this,e)).onSpeakerChanged=function(e){n.setState({selectedSpeakerDeviceId:e.id})},n.onServerChanged=function(e){n.setState({serverURL:e.target.value})},n.onRoomChanged=function(e){n.setState({roomId:e.target.value})},n.onRoomTrackAdded=function(e){if(!0!==e.isLocal()){var t=e.getId();if(console.log("Track Added: ".concat(t)),!m.a.find(n.remoteTracks,{id:t})){var a={id:t,participantId:e.getParticipantId(),type:e.getType(),track:e};window.telimed.remoteTracks.push(a),n.setState({remoteTrackIds:m.a.map(window.telimed.remoteTracks,(function(e){return{id:e.id,participantId:e.participantId}}))})}}},n.onRoomTrackRemoved=function(e){if(!0!==e.isLocal()){var t=e.getId();window.telimed.remoteTracks=m.a.reject(window.telimed.remoteTracks,{id:t}),n.setState({remoteTrackIds:m.a.map(window.telimed.remoteTracks,(function(e){return{id:e.id,participantId:e.participantId}}))})}},n.onConnectionSuccess=function(){var e=n.state.roomId;try{window.telimed.activeRoom=window.telimed.activeConnection.initJitsiConference(e,{openBridgeChannel:!0}),window.telimed.activeRoom.addEventListener(window.JitsiMeetJS.events.conference.TRACK_ADDED,n.onRoomTrackAdded),window.telimed.activeRoom.addEventListener(window.JitsiMeetJS.events.conference.TRACK_REMOVED,n.onRoomTrackRemoved),window.telimed.activeRoom.join(),n.setState({status:"open",lastError:"",activeRoomId:Object(w.a)()})}catch(t){n.setState({status:"closed",lastError:t.message})}},n.onConnectionFailed=function(e,t,a,i){n.setState({status:"closed",lastError:e,activeRoomId:null})},n.onConnectionDisconnect=function(){window.telimed.activeConnection.removeEventListener(window.JitsiMeetJS.events.connection.CONNECTION_ESTABLISHED,n.onConnectionSuccess),window.telimed.activeConnection.removeEventListener(window.JitsiMeetJS.events.connection.CONNECTION_FAILED,n.onConnectionFailed),window.telimed.activeConnection.removeEventListener(window.JitsiMeetJS.events.connection.CONNECTION_DISCONNECTED,n.onConnectionDisconnect),window.telimed.activeRoom.removeEventListener(window.JitsiMeetJS.events.conference.TRACK_ADDED,n.onRoomTrackAdded),window.telimed.activeRoom.removeEventListener(window.JitsiMeetJS.events.conference.TRACK_REMOVED,n.onRoomTrackRemoved)},n.onConnect=function(){var e=n.state,t=e.roomId,a=e.serverURL;n.setState({status:"Joining..."}),window.telimed.activeConnection=new window.JitsiMeetJS.JitsiConnection(null,null,{hosts:{domain:a,muc:"conference.".concat(a)},serviceUrl:"wss://".concat(a,"/xmpp-websocket?room=").concat(t),clientNode:"https://".concat(a)}),window.telimed.activeConnection.addEventListener(window.JitsiMeetJS.events.connection.CONNECTION_ESTABLISHED,n.onConnectionSuccess),window.telimed.activeConnection.addEventListener(window.JitsiMeetJS.events.connection.CONNECTION_FAILED,n.onConnectionFailed),window.telimed.activeConnection.addEventListener(window.JitsiMeetJS.events.connection.CONNECTION_DISCONNECTED,n.onConnectionDisconnect),window.telimed.activeConnection.connect()},n.onDisconnect=function(){if(window.telimed.activeRoom){n.setState({status:"Leaving..."});try{window.telimed.activeRoom.leave().then((function(){window.telimed.activeConnection&&window.telimed.activeConnection.disconnect(),n.setState({status:"closed",remoteTracks:[],activeRoomId:null})}))}catch(e){n.setState({status:"closed",lastError:e.message})}}},n.renderRemoteTracks=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=[],n=m.a.keys(e);if(0===n.length)return null;var c,o=Object(d.a)(n);try{for(o.s();!(c=o.n()).done;){var r=c.value;a.push(i.a.createElement("div",{key:r,className:"B_Body_Block"},i.a.createElement(h,{trackIds:e[r],selectedSpeakerDeviceId:t})))}}catch(s){o.e(s)}finally{o.f()}return a},n.state={serverURL:"beta.meet.jit.si",roomId:"franktest",selectedSpeakerDeviceId:"",defaultMicId:"",defaultVideoId:"",defaultSpeakerId:"",deviceList:[],status:"closed",lastError:"",remoteTrackIds:[],loaded:!1,activeRoomId:null},window.telimed={},window.telimed.remoteTracks=[],window.telimed.activeConnection=null,window.telimed.activeRoom=null,n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.JitsiMeetJS.mediaDevices.enumerateDevices((function(t){var a,n=[],i=Object(d.a)(t);try{for(i.s();!(a=i.n()).done;){var c=a.value;n.push({name:c.label,id:c.deviceId,type:c.kind})}}catch(l){i.e(l)}finally{i.f()}var o=(m.a.find(n,{type:"audioinput"})||{}).id||"none",r=(m.a.find(n,{type:"videoinput"})||{}).id||"none",s=(m.a.find(n,{type:"audiooutput"})||{}).id||"none";e.setState({deviceList:n,defaultMicId:o,defaultVideoId:r,defaultSpeakerId:s,loaded:!0})}))}},{key:"componentDidUpdate",value:function(){}},{key:"render",value:function(){var e=this,t=this.state,a=t.selectedSpeakerDeviceId,n=t.serverURL,c=t.roomId,o=t.status,d=t.lastError,r=t.defaultMicId,s=t.defaultVideoId,l=t.defaultSpeakerId,u=t.deviceList,v=t.loaded,p=void 0!==v&&v,h=t.remoteTrackIds,w=void 0===h?[]:h,I=t.activeRoomId;if(!1===p)return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"AppLoading"},i.a.createElement("h3",null,"Loading...")));var E=m.a.groupBy(w,(function(e){return e.participantId}));return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"TL"},i.a.createElement("div",null,"Server: ",i.a.createElement("input",{readOnly:"closed"!==o,type:"text",onChange:function(t){e.setState({serverURL:t.target.value})},value:n})),i.a.createElement("div",null,"Room: ",i.a.createElement("input",{readOnly:"closed"!==o,type:"text",onChange:function(t){e.setState({roomId:t.target.value})},value:c})),i.a.createElement("div",null,"closed"===o?i.a.createElement("button",{onClick:this.onConnect},"Connect"):"open"===o?i.a.createElement("button",{onClick:this.onDisconnect},"Disconnect"):i.a.createElement("button",{disabled:!0},o)),i.a.createElement("div",null,d)),i.a.createElement("div",{className:"TR"},i.a.createElement("div",{className:"TR_Header"},i.a.createElement("h3",null,"Me"),i.a.createElement(k,{deviceList:u,key:"LocalSpeaker",defaultSpeakerId:l,onSpeakerChanged:this.onSpeakerChanged})),i.a.createElement("div",{class:"TR_Body"},i.a.createElement("div",{className:"TR_Body_Block"},i.a.createElement(f,{activeRoomId:I,deviceList:u,defaultMicId:r,defaultVideoId:s,key:"localTracks"})))),i.a.createElement("div",{className:"B"},i.a.createElement("div",{className:"B_Header"},i.a.createElement("h3",null,"Them")),i.a.createElement("div",{className:"B_Body"},this.renderRemoteTracks(E,a))))}}]),a}(i.a.Component);window.JitsiMeetJS.init(),o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(I,null)),document.getElementById("root"))}],[[9,1,2]]]);
//# sourceMappingURL=main.ef7901ea.chunk.js.map