# HumaLog-VLA project page

Public project page for HumaLog's LingBot-VLA 2.0 adaptation and RoboTwin 2.0 evaluation.

The site is organized into five main pages plus three focused experiment pages:

- Home: project overview and headline metrics
- Method: training and execution pipeline
- Experiments: a dropdown index for the three controlled studies
  - Relative joint-angle: Joint-wise vs. Horizon × Joint normalization
  - Action horizon: fixed H25/H50 vs. AutoHorizon
  - Data augmentation: Clean demonstration augmentation
- Results: aggregate and per-task RoboTwin evaluation
- Demo: SO101 dual-arm video and project resources

- Clean2Clean: 72.6%
- Clean2Random: 39.2%
- Combined RoboTwin 2.0 success: 55.9%
- AutoHorizon: 23.1 average executed steps, +2.6% success over the best fixed horizon
- Training: 20k-step full SFT followed by 8k-step LoRA on augmented Clean data

Website: <https://4588025.github.io/lingbot-vla-project-page/>

The page presents the HumaLog team's Clean augmentation, relative-joint action representation, Horizon × Joint normalization, two-stage training, and AutoHorizon execution method. The full training and evaluation repository remains private during the current release stage.
