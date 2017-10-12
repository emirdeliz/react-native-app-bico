import React, { Component } from 'react';
import { Button, Icon, View, Text } from 'native-base';
import { AudioRecorder, AudioUtils } from 'react-native-audio';

import Style from './assets/style';

export default class RecordAudio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentTime: 0,
      recordTime: 0,
      recording: false,
      fileRecord: '',
    };
  }

  componentDidMount() {
    const audioPath = `${AudioUtils.DocumentDirectoryPath}/record-bico.aac`;

    AudioRecorder.prepareRecordingAtPath(audioPath, {
      SampleRate: 22050,
      Channels: 1,
      AudioQuality: 'Medium',
      AudioEncoding: 'aac',
    });

    AudioRecorder.onProgress = (data) => {
      this.setState({ currentTime: data.currentTime });

      if (this.state.recording)
        this.setState({ recordTime: data.currentTime });
      else if ((data.currentTime + 0.001) >= this.state.recordTime)
        this.play(false);
    };

    AudioRecorder.onFinished = (data) => {
      this.setState({ fileRecord: data.audioFileURL });
    };
  }

  record(isRecording) {
    this.setState({ recording: isRecording, currentTime: 0 });

    if (isRecording)
      AudioRecorder.startRecording();
    else
      AudioRecorder.stopRecording();
  }

  play(isPlaying) {
    this.setState({ playing: isPlaying, currentTime: 0 });

    if (isPlaying)
      AudioRecorder.playRecording();
    else
      AudioRecorder.stopPlaying();
  }

  formatTime(totalSeconds) {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds - (hours * 3600)) / 60);
    let seconds = totalSeconds - (hours * 3600) - (minutes * 60);
    seconds = Math.round(seconds * 100) / 100;

    let result = (minutes < 10 ? `0${minutes}` : minutes);
    result += (seconds < 10 ? `:0${seconds}` : `:${seconds}`);
    return result;
  }

  render() {
    const buttonPlay = this.state.fileRecord ?
      (
        <Button rounded
          style={Style.buttonPlay}
          onPress={this.play.bind(this, !this.state.playing)}
        >
          <Icon name={this.state.playing ? 'ios-square' : 'ios-play'} />
        </Button>
      ) : null;

    return (
      <View style={Style.containerButtons}>
        { buttonPlay }
        <Button rounded
          style={Style.buttonRecord}
          onLongPress={this.record.bind(this, true)}
          onPressOut={this.record.bind(this, false)}
        >
          <Icon name="ios-microphone" />
        </Button>
        <Text style={Style.currentTime}>
          { this.formatTime(Math.round(this.state.currentTime)) }
        </Text>
      </View>
    );
  }
}

/*

For Android

import React, { Component } from 'react'
import { Button, Icon, View, Text } from 'native-base'

import Style from './assets/style'

export default class RecordAudio extends Component {

constructor(props){
super(props)
}

render() {
return (
<Text>AUDIO</Text>
)
}
}
*/
