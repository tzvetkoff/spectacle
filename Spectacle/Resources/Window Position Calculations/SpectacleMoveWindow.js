windowPositionCalculationRegistry.registerWindowPositionCalculationWithAction(function (windowRect, visibleFrameOfSourceScreen, visibleFrameOfDestinationScreen) {
    return SpectacleWindowSizeAdjuster.moveWindowRect(windowRect, visibleFrameOfDestinationScreen, 0.0, 15.0);
}, "SpectacleWindowActionUp");

windowPositionCalculationRegistry.registerWindowPositionCalculationWithAction(function (windowRect, visibleFrameOfSourceScreen, visibleFrameOfDestinationScreen) {
    return SpectacleWindowSizeAdjuster.moveWindowRect(windowRect, visibleFrameOfDestinationScreen, 0.0, -15.0);
}, "SpectacleWindowActionDown");

windowPositionCalculationRegistry.registerWindowPositionCalculationWithAction(function (windowRect, visibleFrameOfSourceScreen, visibleFrameOfDestinationScreen) {
    return SpectacleWindowSizeAdjuster.moveWindowRect(windowRect, visibleFrameOfDestinationScreen, -15.0, 0.0);
}, "SpectacleWindowActionLeft");

windowPositionCalculationRegistry.registerWindowPositionCalculationWithAction(function (windowRect, visibleFrameOfSourceScreen, visibleFrameOfDestinationScreen) {
    return SpectacleWindowSizeAdjuster.moveWindowRect(windowRect, visibleFrameOfDestinationScreen, 15.0, 0.0);
}, "SpectacleWindowActionRight");
