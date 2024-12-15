const IS_DEV = process.env.APP_VARIANT === 'development';
const IS_PREVIEW = process.env.APP_VARIANT === 'preview';

const getUniqueIdentifier = () => {
  if (IS_DEV) {
    return 'com.ianmande.expoapp';
  }

  if (IS_PREVIEW) {
    return 'com.ianmande.expoapp.preview';
  }

  return 'com.ianmande.expoapp.prod';
};

const getAppName = () => {
  if (IS_DEV) {
    return 'Imande (Dev)';
  }

  if (IS_PREVIEW) {
    return 'Imande (Preview)';
  }

  return 'Imande';
};

export default {
  expo: {
    name: getAppName(),
    slug: 'expo-app',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/images/icon.png',
    scheme: 'myapp',
    userInterfaceStyle: 'automatic',
    newArchEnabled: true,
    ios: {
      supportsTablet: true,
      bundleIdentifier: getUniqueIdentifier(),
    },
    android: {
      adaptiveIcon: {
        foregroundImage: './assets/images/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
      package: getUniqueIdentifier(),
    },
    web: {
      bundler: 'metro',
      output: 'static',
      favicon: './assets/images/favicon.png',
    },
    plugins: [
      'expo-router',
      [
        'expo-splash-screen',
        {
          image: './assets/images/splash-icon.png',
          imageWidth: 200,
          resizeMode: 'contain',
          backgroundColor: '#ffffff',
        },
      ],
    ],
    experiments: {
      typedRoutes: true,
    },
    extra: {
      router: {
        origin: false,
      },
      eas: {
        projectId: '360d04ba-0559-4284-b13d-e948bfc93594',
      },
    },
    owner: 'ianmande',
  },
};
