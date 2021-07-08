- git 提交
  1. git add . (保存修改点)
  2. git commit -m "describe" (暂存修改)
  3. git push origin branchName (推送到远程分支)

  4. git checkout -b branchName (创建并切换到新建分支)
  5. git stash / git stash pop (存储到本地缓存,获取该分支本地缓存)
  6. git cherry-pick commitID (将分支A的某一条commit单独提交到分支B)
  7. git cherry-pick commitIDA^..commitIDB(A->B之间的commit合并(包括A和B))