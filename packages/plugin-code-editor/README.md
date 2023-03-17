
## 基于 @alilc/lowcode-plugin-code-editor@1.0.6 版本

- 修正 根据schema.json更新渲染后 源码面板内容无更新的问题，更新源码面板的使用方法如下：

```
import { project, event } from '@alilc/lowcode-engine';

event.emit('codeEditor.updateCode', project.exportSchema(TransformStage.Save));
```