# rcos-website

This website shall be a simple webapp that allows a user to shape and then play a waveform.  

There shall be a waveform shaping pane that allows the user to shape a waveform by inserting, deleting, and moving spline interpolation points on a plot of the waveform.  These points determine the wave form.  The kind of spline used on a given interval between points can be toggled between linear and cubic so that the user can waveforms containing lines and sharp edges together with smooth curves.

There shall be a pause/play button.  When the button is in the "play" state, a tone of the specified wave form plays.  The tone changes as the user changes the wave form.

There are to be a frequency slider and a volume slider to control the frequency and the volume, respectively, of the tone that is played.  In addition, are numeric inputs for finer-grained control of both.  Frequency shall be specified in hertz.  Volume shall be specified by percentage of the maximum possible amplitude allowable at the volume setting of the user's device.  The slider for volume shall use a logarithmic scale, as humans perceive differences in sound volume logarithmically.  

There shall be a help button.  Clicking this button opens a help menu containing information about each feature and how to use it.

If time permits, there shall be an ability to have more than one wave form.  The frequency and volume of each shall be adjustable individually, but there shall also be a mechanism for adjusting the pitch and volume of multiple wave forms at once.