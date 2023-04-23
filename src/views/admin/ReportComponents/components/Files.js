import TextBlock from "components/textBlock/TextBlock";
import React from "react";

const data = `META-INF/com/android/build/gradle/app-metadata.properties
classes.dex
lib/arm64-v8a/libapp.so
lib/arm64-v8a/libflutter.so
lib/armeabi-v7a/libapp.so
lib/armeabi-v7a/libflutter.so
lib/x86_64/libapp.so
lib/x86_64/libflutter.so
assets/flutter_assets/AssetManifest.json
assets/flutter_assets/FontManifest.json
assets/flutter_assets/NOTICES.Z
assets/flutter_assets/fonts/MaterialIcons-Regular.otf
assets/flutter_assets/packages/cupertino_icons/assets/CupertinoIcons.ttf
assets/flutter_assets/shaders/ink_sparkle.frag
AndroidManifest.xml
res/09.9.png
res/2P.xml
res/3m.xml
res/4W.xml
res/4u.xml
res/8V.9.png
res/8r.xml
res/93.9.png
res/BB.xml
res/C7.xml
res/CG.png
res/Cv.xml
res/D2.png
res/DS.xml
res/FZ.xml
res/LD.png
res/NR.xml
res/O3.9.png
res/Ot.png
res/Pp.xml
res/Pq.9.png
res/Qv.png
res/SD.png
res/SH.xml
res/SS.xml
res/T2.9.png
res/UT.xml
res/Xs.9.png
res/aA.xml
res/bM.xml
res/dH.9.png
res/eK.9.png
res/hj.9.png
res/iL.xml
res/jK.9.png
res/jy.png
res/n1.xml
res/q6.xml
res/tr.9.png
res/u3.png
res/u6.xml
resources.arsc
DebugProbesKt.bin
META-INF/androidx.activity_activity.version
META-INF/androidx.annotation_annotation-experimental.version
META-INF/androidx.arch.core_core-runtime.version
META-INF/androidx.core_core.version
META-INF/androidx.customview_customview.version
META-INF/androidx.fragment_fragment.version
META-INF/androidx.lifecycle_lifecycle-livedata-core.version
META-INF/androidx.lifecycle_lifecycle-livedata.version
META-INF/androidx.lifecycle_lifecycle-runtime.version
META-INF/androidx.lifecycle_lifecycle-viewmodel.version
META-INF/androidx.loader_loader.version
META-INF/androidx.savedstate_savedstate.version
META-INF/androidx.tracing_tracing.version
META-INF/androidx.versionedparcelable_versionedparcelable.version
META-INF/androidx.viewpager_viewpager.version
META-INF/androidx.window_window-java.version
META-INF/androidx.window_window.version
META-INF/services/kotlinx.coroutines.CoroutineExceptionHandler
META-INF/services/kotlinx.coroutines.internal.MainDispatcherFactory
kotlin-tooling-metadata.json
kotlin/annotation/annotation.kotlin_builtins
kotlin/collections/collections.kotlin_builtins
kotlin/coroutines/coroutines.kotlin_builtins
kotlin/internal/internal.kotlin_builtins
kotlin/kotlin.kotlin_builtins
kotlin/ranges/ranges.kotlin_builtins
kotlin/reflect/reflect.kotlin_builtins
META-INF/CERT.SF
META-INF/CERT.RSA
META-INF/MANIFEST.MF`;

const ComponentFiles = () => {
    return <TextBlock data={data} textBlockName="Files"/>
}

export default ComponentFiles;