const ZH_TRANSLATIONS = {
  "Method": "方法",
  "Experiments": "实验",
  "Joint-angle": "关节角度",
  "Action horizon": "动作 Horizon",
  "Data augmentation": "数据增强",
  "Results": "结果",
  "Demo": "演示",
  "Resources": "资源",
  "Home": "首页",
  "Back to top ↑": "返回顶部 ↑",
  "LingBot-VLA 2.0 adaptation for robust manipulation.": "面向稳健操作的 LingBot-VLA 2.0 适配方案。",

  "Robust robot policies": "从干净示范中",
  "from clean demonstrations.": "学习稳健机器人策略。",
  "Multi-task VLA post-training for complex scenes": "面向复杂场景泛化的多任务 VLA 后训练",
  "and adaptive temporal inference.": "与自适应时域推理优化",
  "A 6B vision-language-action policy adapted with multi-stage full-parameter training, protected visual augmentation, and closed-loop evaluation across 50 manipulation tasks.": "通过多阶段全参数训练、受保护的视觉增强和 50 个操作任务闭环测评，对 60 亿参数视觉—语言—动作策略进行适配。",
  "Explore the method": "查看方法",
  "View results": "查看结果",
  "Dense FP32 policy": "稠密 FP32 策略",
  "student parameters": "学生模型参数",
  "Clean data": "Clean 数据",
  "Full SFT": "全参数 SFT",
  "Closed loop": "闭环执行",
  "best model": "最佳模型",
  "RoboTwin 2.0 success": "RoboTwin 2.0 成功率",
  "Coverage": "覆盖范围",
  "tasks": "个任务",
  "Clean + Randomized": "Clean + Randomized",
  "Project overview": "项目概览",
  "Learning from clean data.": "从干净数据中学习。",
  "Acting beyond clean scenes.": "在更复杂场景中执行。",
  "The project combines data augmentation, relative joint actions, multi-stage training, and adaptive closed-loop execution for robust manipulation.": "项目结合数据增强、相对关节动作、多阶段训练与自适应闭环执行，以提升操作鲁棒性。",
  "Methods, controlled experiments, task-level results, and the real-world SO101 demonstration are separated into focused pages.": "方法、对照实验、任务级结果与真实 SO101 演示分别呈现在独立页面中。",
  "How the policy is trained and executed.": "策略如何训练与执行。",
  "Data, relative actions, normalization, two-stage training, and closed-loop control.": "涵盖数据、相对动作、归一化、两阶段训练与闭环控制。",
  "Open method →": "打开方法 →",
  "Three controlled experiment groups.": "三个对照实验组。",
  "Joint-angle representation, action horizon, and Clean data augmentation.": "关节角度表示、动作 Horizon 与 Clean 数据增强。",
  "Open experiments →": "打开实验 →",
  "Performance across 50 RoboTwin tasks.": "50 个 RoboTwin 任务上的表现。",
  "Clean2Clean, Clean2Random, aggregate scores, and task-level exploration.": "包含 Clean2Clean、Clean2Random、汇总分数与任务级结果。",
  "Open results →": "打开结果 →",
  "Dual-arm handover in the real world.": "真实环境中的双臂交接。",
  "Watch the SO101 demonstration and access project resources.": "观看 SO101 演示并访问项目资源。",
  "Open demo →": "打开演示 →",

  "Data, action, and": "数据、动作与",
  "horizon optimization.": "Horizon 优化。",
  "The complete system combines data processing, relative-joint control, two-stage training, and adaptive execution.": "完整系统结合数据处理、相对关节控制、两阶段训练与自适应执行。",
  "Data, action, and horizon optimization": "数据、动作与 Horizon 优化",
  "Three coordinated changes improve generalization and closed-loop execution.": "三项协同改进共同提升泛化能力与闭环执行效果。",
  "Clean augmentation": "Clean 数据增强",
  "Expand the Clean demonstration distribution for more robust scene generalization.": "扩展 Clean 示范分布，增强场景泛化能力。",
  "Relative joint actions": "相对关节动作",
  "Represent dual-arm targets relative to the current joints to reduce horizon-dependent scale shifts.": "以当前关节为参考表示双臂目标，减少随 Horizon 变化的尺度偏移。",
  "Training loss reduced by 6.5%": "训练损失降低 6.5%",
  "Two-stage training": "两阶段训练",
  "Stage 1 uses Clean demonstrations for 20k-step full SFT; Stage 2 applies 8k-step LoRA on augmented Clean data.": "阶段 1 使用 Clean 示范进行 20k steps 全参数 SFT；阶段 2 使用增强后的 Clean 数据进行 8k steps LoRA。",
  "AutoHorizon execution": "AutoHorizon 执行",
  "Dynamically adjust the actual action-chunk execution length as task phases progress.": "随任务阶段动态调整动作块的实际执行长度。",
  "Action representation": "动作表示",
  "Horizon × Joint normalization.": "Horizon × Joint 归一化。",
  "Compared with Joint-wise normalization, Horizon × Joint statistics independently normalize every time step and joint dimension, reducing training loss by 6.5%.": "相比 Joint-wise 归一化，Horizon × Joint 对每个时间步和关节维度独立归一化，使训练损失降低 6.5%。",
  "Two stages of targeted optimization": "两阶段定向优化",
  "Full-parameter adaptation establishes the policy; LoRA refines it with augmented Clean data.": "全参数适配建立基础策略，LoRA 再使用增强 Clean 数据进行细化。",
  "Clean data augmentation": "Clean 数据增强",
  "Relative joint representation": "相对关节表示",
  "Training hardware": "训练硬件",
  "two-stage optimization strategy": "两阶段优化策略",
  "Stage 1 · Clean full-parameter SFT": "阶段 1 · Clean 全参数 SFT",
  "Stage 2 · augmented Clean LoRA": "阶段 2 · 增强 Clean LoRA",
  "The final policy combines relative-joint control with AutoHorizon execution.": "最终策略结合相对关节控制与 AutoHorizon 执行。",
  "Continue exploring": "继续浏览",
  "Controlled experiments": "对照实验",
  "Inspect the ablations →": "查看消融实验 →",

  "Three experiments.": "三个实验。",
  "One stronger policy.": "一个更强策略。",
  "Joint-angle representation, action horizon, and data augmentation are evaluated separately.": "分别评估关节角度表示、动作 Horizon 与数据增强。",
  "E1 / Action protocol": "E1 / 动作协议",
  "Relative joint-angle": "相对关节角度",
  "Compare Joint-wise and Horizon × Joint normalization.": "比较 Joint-wise 与 Horizon × Joint 两种归一化。",
  "training loss": "训练损失",
  "Open E1 →": "打开 E1 →",
  "G1 / Execution protocol": "G1 / 执行协议",
  "Compare H0 fixed horizons, VLA-KIL, and H1 kinematics-driven adaptive execution.": "比较 H0 固定 Horizon、VLA-KIL 与 H1 运动学驱动的自适应执行。",
  "success": "成功率",
  "Open G1 →": "打开 G1 →",
  "F1 / Visual augmentation": "F1 / 视觉增强",
  "Measure the effect of Clean demonstration augmentation.": "评估 Clean 示范数据增强的效果。",
  "Open F1 →": "打开 F1 →",
  "Evaluation results": "测评结果",
  "See performance across 50 tasks →": "查看 50 个任务的表现 →",

  "E1 / Relative action": "E1 / 相对动作",
  "Relative targets.": "相对目标。",
  "Time-aware normalization.": "时间感知归一化。",
  "The arm predicts local joint displacement from the current observation instead of a global joint pose.": "机械臂预测相对于当前观测的局部关节位移，而非全局关节姿态。",
  "Action definition": "动作定义",
  "For every future position h, the 12 arm joints use Δq(h) = q(target,h) − q(now). The two grippers remain absolute targets.": "对每个未来位置 h，12 个机械臂关节采用 Δq(h) = q(target,h) − q(now)，两个夹爪仍使用绝对目标。",
  "Joint-wise": "Joint-wise",
  "Pool all 50 future positions, then estimate one distribution for each arm joint.": "汇总全部 50 个未来位置，再为每个机械臂关节估计一个分布。",
  "Estimate a separate distribution for every future position and arm joint.": "为每个未来位置和机械臂关节分别估计分布。",
  "Why we select Horizon × Joint": "为什么选择 Horizon × Joint",
  "Early chunk steps contain small displacements, while later steps are typically larger. Separate statistics preserve this time-dependent scale instead of mixing it away. Tail padding is excluded, and inference uses the matching statistic for each horizon position.": "动作块前段位移较小，后段通常更大。独立统计能够保留随时间变化的尺度，而不会将其混合抹平；尾部 padding 不参与统计，推理时按 Horizon 位置使用对应统计量。",
  "Arm state remains [12]; gripper action/state are not split by horizon.": "机械臂状态仍为 [12]；夹爪动作与状态不按 Horizon 拆分。",
  "Next experiment": "下一个实验",
  "Action-horizon execution →": "动作 Horizon 执行 →",

  "G1 / Horizon experiment": "G1 / Horizon 实验",
  "How many actions": "一次应执行多少",
  "should execute?": "个动作？",
  "H0 fixed horizons, VLA-KIL, and H1 PACE are compared under the same RoboTwin evaluation setting.": "在相同 RoboTwin 测评设置下，对比 H0 固定 Horizon、VLA-KIL 与 H1 PACE。",
  "Closed-loop execution": "闭环执行",
  "Action-horizon comparison": "动作 Horizon 对比",
  "Shorter replanning improves responsiveness, while longer chunks reduce inference frequency. Our AutoHorizon system uses PACE to adjust the executed prefix of every predicted chunk.": "更短的重规划周期提升响应性，更长的动作块降低推理频率。我们的 AutoHorizon 系统使用 PACE 调整每个预测动作块的实际执行前缀。",
  "AutoHorizon · PACE success": "AutoHorizon · PACE 成功率",
  "Average executed horizon": "平均实际 Horizon",
  "steps": "步",
  "RoboTwin 2.0 task success": "RoboTwin 2.0 任务成功率",
  "Why PACE": "为什么选择 PACE",
  "Choose motion evidence, not hidden attention.": "选择运动证据，而非隐藏层注意力。",
  "PACE is less coupled to one model architecture or attention pattern.": "PACE 对特定模型架构和注意力模式的依赖更低。",
  "01 / VLA-KIL limitation": "01 / VLA-KIL 局限",
  "Attention can become diffuse": "注意力可能过于弥散",
  "With relative joint-angle actions, attention decay and its plateau can be less distinct. A flatter distribution weakens the boundary signal that VLA-KIL uses to decide where a prediction remains reliable.": "使用相对关节角度动作时，注意力衰减及其平台期可能不再明显。更平坦的分布会削弱 VLA-KIL 用于判断预测可靠边界的信号。",
  "02 / PACE advantage": "02 / PACE 优势",
  "Kinematics transfers better": "运动学特征更易迁移",
  "PACE reads the predicted motion itself. It uses joint-speed valleys to locate motion-phase boundaries, without requiring internal attention tensors, so it is easier to reuse across VLA models, action representations, and network architectures.": "PACE 直接分析预测动作本身，通过关节速度谷值定位运动阶段边界，不需要模型内部注意力张量，因此更容易跨 VLA 模型、动作表示和网络架构复用。",
  "PACE-v1 flow": "PACE-v1 流程",
  "From one action chunk to one safe prefix.": "从完整动作块到安全执行前缀。",
  "The diagram follows the archived runtime contract used by the evaluation server.": "流程图依据测评服务器归档的运行时协议绘制。",
  "Predict chunk": "预测动作块",
  "LingBot-VLA predicts a 50-step relative-action chunk.": "LingBot-VLA 预测一个 50 步相对动作块。",
  "Decode joints": "解码关节指令",
  "Convert the actions into absolute joint commands for motion analysis.": "将动作转换为绝对关节指令，用于运动分析。",
  "Measure speed": "计算关节速度",
  "Use 12 arm-joint channels; exclude both gripper channels.": "使用 12 个机械臂关节通道，排除两个夹爪通道。",
  "Find boundary": "寻找阶段边界",
  "Locate a calibrated low-speed valley and clamp the horizon to 2–50.": "定位经校准的低速谷值，并将 Horizon 限制在 2–50 步。",
  "Execute & replan": "执行并重规划",
  "Run only the selected prefix, observe again, and predict the next chunk.": "仅执行选定前缀，重新观测后预测下一个动作块。",
  "Runtime contract:": "运行时协议：",
  "excluded · task-calibrated PACE profile.": "已排除 · 按任务校准的 PACE 配置。",
  "Clean data augmentation →": "Clean 数据增强 →",

  "Broader visual variation.": "更丰富的视觉变化。",
  "Lower training loss.": "更低的训练损失。",
  "Protected augmentation expands Clean demonstrations while preserving the action semantics.": "受保护的数据增强在保持动作语义的同时扩展 Clean 示范。",
  "Final 6k-step curriculum": "最终 6k-step 课程",
  "Protected strong–weak augmentation": "受保护的强—弱增强",
  "The student receives a strong view while frozen teachers receive the paired weak view. Current/future frames share geometry, invalid auxiliary regions are masked, and evaluation disables augmentation.": "学生模型接收强增强视图，冻结教师接收配对弱增强视图。当前帧与未来帧共享几何变换，无效辅助区域被遮罩，测评时关闭增强。",
  "Baseline": "基线",
  "Augmented": "增强后",
  "Optimization result; not an isolated closed-loop causal estimate.": "这是优化结果，不代表单变量闭环因果估计。",
  "Implemented recipe": "实际实现",
  "What the project actually applies.": "项目实际使用的增强方案。",
  "A 300-step ramp transitions into four replayable branches. All randomness is tied to the global sample draw.": "经过 300 步渐进阶段后进入四个可复现分支，所有随机性均绑定全局样本抽取。",
  "01 / Paired color": "01 / 配对颜色",
  "Photometric": "光度增强",
  "Brightness 0.7–1.3, contrast 0.6–1.4, saturation 0.7–1.3; shared by views and current/future frames.": "亮度 0.7–1.3、对比度 0.6–1.4、饱和度 0.7–1.3；不同视图及当前/未来帧共享参数。",
  "02 / Local variation": "02 / 局部变化",
  "Gamma + noise": "Gamma + 噪声",
  "Gamma 0.8–1.2 or weak noise σ 0.003–0.01. Pixel noise is restricted to the primary student view.": "Gamma 0.8–1.2 或弱噪声 σ 0.003–0.01；像素噪声仅用于学生主视图。",
  "03 / Primary camera": "03 / 主相机",
  "Light geometry": "轻量几何变换",
  "Scale 0.9–1.1 and translation below 6% per axis. No rotation, shear, or flip; wrist views keep their geometry.": "缩放 0.9–1.1、每轴平移不超过 6%；不使用旋转、剪切或翻转，腕部视图保持原几何。",
  "04 / Sensor quality": "04 / 传感器质量",
  "JPEG + blur": "JPEG + 模糊",
  "JPEG quality 55–95, Gaussian blur, or 3×3 motion blur on visible primary student views.": "对可见的学生主视图应用 JPEG 质量 55–95、高斯模糊或 3×3 运动模糊。",
  "05 / Foreground safe": "05 / 前景保护",
  "Background erasure": "背景擦除",
  "A 5%–20% rectangle is clipped to safe background. Robot, gripper, interacted objects, and image borders are protected.": "在安全背景区域裁取 5%–20% 的矩形；机器人、夹爪、交互物体和图像边缘受到保护。",
  "06 / View robustness": "06 / 视图鲁棒性",
  "Primary-view mask": "主视图遮罩",
  "7% steady-state branch masks the main camera with raw255 midpoint 127.5 while preserving wrist cameras.": "7% 稳态分支以 raw255 中点 127.5 遮罩主相机，同时保留腕部相机。",
  "original": "原始",
  "ordinary": "普通增强",
  "protected erasure request": "受保护擦除",
  "primary mask": "主视图遮罩",
  "RoboTwin visualization": "RoboTwin 可视化",
  "One task sequence, 16 keyframes.": "一个任务序列，16 个关键帧。",
  "A single contact sheet keeps the real task evidence readable without repeating the same sequence across multiple cards.": "使用一张序列图呈现真实任务证据，避免在多张卡片中重复同一序列。",
  "RoboTwin Clean sequence": "RoboTwin Clean 序列",
  "· 16 temporal keyframes": "· 16 个时序关键帧",
  "Source: this project's RoboTwin Clean evaluation evidence, task": "来源：本项目 RoboTwin Clean 测评证据，任务",
  ", environment seed 100010. The augmentation operators are documented above; this evaluation sequence is shown only as a real-data example and was not inserted into the training split.": "，环境种子 100010。增强算子见上文；该测评序列仅作为真实数据示例展示，并未加入训练集。",
  "One frame, four augmentation views.": "同一帧，四种增强视图。",
  "The same RoboTwin moment is cropped from the sequence so each card isolates one augmentation effect.": "从 RoboTwin 序列中裁取同一时刻，使每张卡片只展示一种增强效果。",
  "Original frame": "原始帧",
  "Strong student view": "学生强增强视图",
  "Color + gamma + light geometry + degradation": "颜色 + Gamma + 轻量几何 + 质量退化",
  "safe background": "安全背景区域",
  "Protected erasure": "受保护擦除",
  "Robot, can, and basket remain visible": "机器人、易拉罐和篮筐保持可见",
  "primary view masked": "主视图已遮罩",
  "Whole primary mask": "完整主视图遮罩",
  "Wrist cameras remain available during training": "训练时仍保留腕部相机",
  "Source: this project's RoboTwin Clean evaluation evidence, task": "来源：本项目 RoboTwin Clean 测评证据，任务",
  ", environment seed 100010. Every card uses the same temporal frame; the transforms explain the training recipe, and this evaluation frame was not inserted into the training split.": "，环境种子 100010。所有卡片使用同一时序帧；这些变换用于解释训练配方，该测评帧未加入训练集。",

  "03 / Results · H1 best": "03 / 结果 · H1 最优模型",
  "Performance across": "覆盖",
  "50 RoboTwin tasks.": "50 个 RoboTwin 任务。",
  "E1 / Relative-action branch": "E1 / 相对动作分支",
  "E1 compared with H0 Lab20k.": "E1 与 H0 Lab20k 对比。",
  "Both cover the same 500 task/setting/seed keys: 50 tasks × 2 settings × 5 episodes.": "两者覆盖相同的 500 个任务/设置/种子键：50 个任务 × 2 种设置 × 5 个回合。",
  "Setting": "设置",
  "Clean": "Clean",
  "Randomized": "Randomized",
  "Combined": "综合",
  "Development comparison, not a single-variable ablation. Lab20k and E1 differ in trainable modules, data split, normalization/loss, teachers, optimizer, processed samples, hardware, and model RNG; matching keys do not guarantee pixel-identical execution.": "这是开发阶段对比，不是单变量消融。Lab20k 与 E1 在可训练模块、数据划分、归一化/损失、教师模型、优化器、处理样本、硬件及模型随机数方面均有差异；相同键不保证像素级完全一致的执行。",
  "H0 / Full Action Expert": "H0 / 完整 Action Expert",
  "H0 compared with Lab20k.": "H0 与 Lab20k 对比。",
  "Both cover the same fixed 500 task/setting/seed keys: 50 tasks × 2 settings × 5 episodes.": "两者覆盖相同的固定 500 个任务/设置/种子键：50 个任务 × 2 种设置 × 5 个回合。",
  "Lab20k − H0": "Lab20k − H0",
  "Fixed-key development comparison from the archived project report. H0 and Lab20k use their own normalization and differ in trainable scope, training recipe, hardware, RGB preprocessing, and model RNG; this is not a single-variable ablation.": "数据来自项目归档报告中的固定键开发对比。H0 与 Lab20k 各自使用独立归一化，并在可训练范围、训练配方、硬件、RGB 预处理和模型随机数方面存在差异，因此这不是单变量消融。",
  "H0 → H1 / Model progression": "H0 → H1 / 模型演进",
  "H1 compared with H0.": "H1 与 H0 对比。",
  "H0 uses the Lab20k baseline; H1 is the best reported system with relative actions, augmentation, and adaptive execution.": "H0 使用 Lab20k 基线；H1 是结合相对动作、数据增强与自适应执行的最终最佳系统。",
  "H0 uses the Lab20k baseline; H1 combines joint-space relative displacement, demonstration distribution expansion, and adaptive temporal execution.": "H0 使用 Lab20k 基线；H1 融合关节空间相对偏移表征、专家示范分布扩展与自适应执行步长。",
  "H1 − H0": "H1 − H0",
  "Reported task-success comparison. H0 denotes the Lab20k baseline, while H1 denotes the final best system.": "报告中的任务成功率对比：H0 表示 Lab20k 基线，H1 表示最终最佳系统。",
  "H1 / Best model": "H1 / 最优模型",
  "H1 AutoHorizon delivers the best result": "H1 AutoHorizon 取得最佳结果",
  "Per-task success, 30 trials per setting": "任务级成功率，每种设置 30 次试验",
  "Clean evaluation setting": "Clean 测评设置",
  "Randomized evaluation setting": "Randomized 测评设置",
  "best RoboTwin 2.0 model": "最佳 RoboTwin 2.0 模型",
  "AutoHorizon dynamically adjusts action-chunk execution length as task phases progress. Its average executed horizon is 23.1 steps, improving task success by 2.6% over the best fixed-horizon strategy.": "AutoHorizon 随任务阶段动态调整动作块执行长度，平均实际 Horizon 为 23.1 步，相比最佳固定 Horizon 策略提升 2.6% 成功率。",
  "Task explorer": "任务浏览器",
  "Inspect all 50 tasks": "查看全部 50 个任务",
  "Random": "随机化",
  "Gap": "差值",
  "Loading verified task results…": "正在加载已验证的任务结果…",
  "Real-world demo": "真实环境演示",
  "Watch dual-arm handover →": "观看双臂交接 →",

  "04 / Real-world demo": "04 / 真实环境演示",
  "From simulation to": "从仿真走向",
  "dual-arm handover.": "双臂交接。",
  "A LingBot-VLA adaptation for two SO101 follower arms.": "面向两台 SO101 从臂的 LingBot-VLA 适配。",
  "From simulation to dual-arm handover": "从仿真走向双臂交接",
  "A full-parameter LingBot-VLA adaptation for two SO101 follower arms.": "面向两台 SO101 从臂的 LingBot-VLA 全参数适配。",
  "Your browser does not support embedded video.": "你的浏览器不支持嵌入式视频。",
  "Grasp": "抓取",
  "Dual-arm handover": "双臂交接",
  "Transfer": "转移",
  "06 / Resources": "06 / 资源",
  "Reproduce the system": "复现系统",
  "Code, model, protocol, and evidence remain version-bound.": "代码、模型、协议和证据均与版本绑定。",
  "Source": "源码",
  "Project page repository": "项目页面仓库",
  "Model": "模型",
  "Dense FP32 checkpoint": "稠密 FP32 权重",
  "Protocol": "协议",
  "3,000-episode evaluation": "3,000 回合测评",
  "Report": "报告",
  "Method & reproduction": "方法与复现"
  ,"Joint-space representation": "关节空间表征"
  ,"Adaptive execution": "自适应执行步长"
  ,"Demonstration expansion": "专家示范分布扩展"
  ,"The project combines expert-demonstration distribution expansion, joint-space relative displacement representation, two-stage parameter adaptation, and adaptive temporal execution.": "项目结合专家示范分布扩展、关节空间相对偏移表征、两阶段参数适配与自适应执行步长。"
  ,"Demonstration expansion, joint-space offsets, factorized normalization, staged adaptation, and adaptive execution.": "涵盖示范分布扩展、关节空间偏移、因子化归一化、分阶段参数适配与自适应执行。"
  ,"Joint-space representation, adaptive execution horizon, and expert-demonstration distribution expansion.": "关节空间相对偏移表征、自适应执行步长与专家示范分布扩展。"
  ,"Distribution, representation,": "分布、表征与"
  ,"and temporal adaptation.": "时域自适应。"
  ,"The complete system couples demonstration distribution expansion, joint-space relative displacement control, staged parameter adaptation, and adaptive temporal execution.": "完整系统融合专家示范分布扩展、关节空间相对偏移控制、分阶段参数适配与自适应时域执行。"
  ,"Expert-demonstration distribution expansion": "专家示范分布扩展"
  ,"Expand the Clean expert-demonstration distribution for stronger generalization to complex scenes.": "扩展 Clean 专家示范分布，提升模型对复杂场景的泛化能力。"
  ,"Joint-space relative displacement representation": "关节空间相对偏移表征"
  ,"Encode dual-arm targets as offsets from the current joint state to suppress initialization sensitivity and horizon-dependent scale drift.": "将双臂目标编码为相对当前关节状态的偏移，以降低初始位姿敏感性与随预测步长增长产生的尺度漂移。"
  ,"Full-parameter adaptation → parameter-efficient refinement": "全参数适配 → 参数高效精调"
  ,"Adaptive temporal execution": "自适应执行步长"
  ,"Dynamically regulate the effective action-chunk length as manipulation phases evolve.": "随操作阶段演化动态调节 Action Chunk 的实际执行长度。"
  ,"Time–joint factorized normalization.": "时序—关节维度独立归一化。"
  ,"Compared with joint-wise shared statistics, the time–joint factorized scheme estimates an independent distribution for every prediction step and joint dimension, reducing training loss by 6.5%.": "相比按关节共享统计量的方案，时序—关节维度独立归一化为每个预测步与关节维度分别估计分布，使训练损失降低 6.5%。"
  ,"Two-stage parameter adaptation": "两阶段参数适配"
  ,"Full-parameter SFT establishes the task policy; LoRA performs parameter-efficient refinement on expanded Clean demonstrations.": "全参数 SFT 建立任务策略，LoRA 再基于扩展后的 Clean 示范进行参数高效精调。"
  ,"Demonstration distribution expansion": "专家示范分布扩展"
  ,"Joint-space relative displacement": "关节空间相对偏移表征"
  ,"Time × Joint": "时序 × 关节"
  ,"full adaptation → efficient refinement": "全参数适配 → 参数高效精调"
  ,"The final policy combines joint-space relative displacement control with PACE-based adaptive temporal execution.": "最终策略结合关节空间相对偏移控制与基于 PACE 的自适应执行步长。"
  ,"Action representation, adaptive temporal execution, and demonstration distribution expansion are evaluated separately.": "分别评估关节空间表征、自适应执行步长与专家示范分布扩展。"
  ,"E1 / Action representation": "E1 / 动作表征"
  ,"Compare joint-wise shared statistics with time–joint factorized normalization.": "比较按关节共享统计量与时序—关节维度独立归一化。"
  ,"G1 / Temporal execution": "G1 / 时域执行"
  ,"Adaptive execution horizon": "自适应执行步长"
  ,"F1 / Distribution expansion": "F1 / 分布扩展"
  ,"Measure the effect of expanding the Clean expert-demonstration distribution.": "评估扩展 Clean 专家示范分布所带来的效果。"
  ,"Joint-space offsets.": "关节空间偏移。"
  ,"Time-aware statistics.": "时间感知统计。"
  ,"The policy predicts local displacement in joint space instead of a global joint pose.": "策略预测关节空间中的局部偏移，而非全局关节姿态。"
  ,"Representation definition": "表征定义"
  ,"Joint-wise shared": "按关节共享统计"
  ,"Time × Joint factorized": "时序 × 关节独立统计"
  ,"Why time–joint factorization": "为什么采用时序—关节维度独立归一化"
  ,"G1 / Adaptive temporal execution": "G1 / 自适应执行步长"
  ,"Closed-loop temporal control": "闭环时域控制"
  ,"Adaptive execution-horizon comparison": "自适应执行步长对比"
  ,"Shorter replanning improves responsiveness, while longer chunks reduce inference frequency. PACE regulates the executable prefix of every predicted action chunk.": "更短的重规划周期提升响应性，更长的动作块降低推理频率；PACE 动态调节每个预测 Action Chunk 的可执行前缀。"
  ,"PACE adaptive execution success": "PACE 自适应执行成功率"
  ,"Average effective horizon": "平均实际执行步长"
  ,"With joint-space relative displacement actions, attention decay and its plateau can be less distinct. A flatter distribution weakens the boundary signal that VLA-KIL uses to decide where a prediction remains reliable.": "在关节空间相对偏移表征下，注意力衰减及平台期可能不再明显；更平坦的分布会削弱 VLA-KIL 用于判断预测可靠边界的信号。"
  ,"Expert-demonstration expansion →": "专家示范分布扩展 →"
  ,"F1 / Demonstration distribution expansion": "F1 / 专家示范分布扩展"
  ,"Broader visual support.": "更广的视觉分布支持。"
  ,"Semantics-preserving perturbations expand the Clean expert-demonstration distribution.": "通过语义保持扰动扩展 Clean 专家示范分布。"
  ,"Semantics-preserving strong–weak expansion": "语义保持的强—弱增强"
  ,"Expanded": "分布扩展后"
};

const TITLE_ZH = {
  "HumaLog-VLA · LingBot-VLA × RoboTwin": "HumaLog-VLA · LingBot-VLA × RoboTwin",
  "Method · HumaLog-VLA": "方法 · HumaLog-VLA",
  "Experiments · HumaLog-VLA": "实验 · HumaLog-VLA",
  "Joint-space relative displacement · HumaLog-VLA": "关节空间相对偏移表征 · HumaLog-VLA",
  "Adaptive temporal execution · HumaLog-VLA": "自适应执行步长 · HumaLog-VLA",
  "Demonstration distribution expansion · HumaLog-VLA": "专家示范分布扩展 · HumaLog-VLA",
  "Results · HumaLog-VLA": "结果 · HumaLog-VLA",
  "Demo · HumaLog-VLA": "演示 · HumaLog-VLA"
};

const originalText = new WeakMap();
const originalTitle = document.title;

function languagePreference() {
  try { return localStorage.getItem("humalog-language") || "en"; }
  catch (_) { return "en"; }
}

function rememberLanguage(language) {
  try { localStorage.setItem("humalog-language", language); }
  catch (_) { /* Storage can be disabled without breaking the switch. */ }
}

function textNodes() {
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parent = node.parentElement;
      if (!parent || !node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      if (parent.closest("script, style, code, pre, [data-language-toggle]")) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  return nodes;
}

function applyLanguage(language) {
  textNodes().forEach((node) => {
    if (!originalText.has(node)) originalText.set(node, node.nodeValue);
    const original = originalText.get(node);
    if (language === "en") {
      node.nodeValue = original;
      return;
    }
    const core = original.trim();
    const translated = ZH_TRANSLATIONS[core];
    if (!translated) return;
    node.nodeValue = original.replace(core, translated);
  });

  document.documentElement.lang = language === "zh" ? "zh-CN" : "en";
  document.title = language === "zh" ? (TITLE_ZH[originalTitle] || originalTitle) : originalTitle;
  const toggle = document.querySelector("[data-language-toggle]");
  if (toggle) {
    toggle.innerHTML = language === "zh" ? "<span>EN</span><i>中</i>" : "<span>中</span><i>EN</i>";
    toggle.setAttribute("aria-label", language === "zh" ? "Switch to English" : "切换到中文");
  }
  document.dispatchEvent(new CustomEvent("humalog:language", { detail: { language } }));
}

const initialLanguage = languagePreference();
applyLanguage(initialLanguage);

document.querySelector("[data-language-toggle]")?.addEventListener("click", () => {
  const next = document.documentElement.lang.startsWith("zh") ? "en" : "zh";
  rememberLanguage(next);
  applyLanguage(next);
});
