package com.appbico;

import android.app.Application;
import android.util.Log;

import com.facebook.react.ReactApplication;
import fr.bamlab.rnimageresizer.ImageResizerPackage;
import com.github.xfumihiro.react_native_image_to_base64.ImageToBase64Package;
import com.facebook.reactnative.androidsdk.FBSDKPackage;
import com.oblador.vectoricons.VectorIconsPackage;
import com.smixx.reactnativeicons.ReactNativeIcons;
import com.lwansbrough.RCTCamera.RCTCameraPackage;
import com.xxsnakerxx.socialauth.SocialAuthPackage;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;

import java.util.Arrays;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    protected boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),
            new ImageResizerPackage(),
            new ImageToBase64Package(),
            new FBSDKPackage(),
            new SocialAuthPackage(),
            new VectorIconsPackage(),
            new ReactNativeIcons(),
            new RCTCameraPackage(),
            new SocialAuthPackage()
      );
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
      return mReactNativeHost;
  }
}
