/**
 *
 *  git学习笔记
 *
 *  git config --global user.name 用户名
 *  git config --global user.email 邮箱
 *
 *  git init
 *
 *  git add <file>
 *
 *  git commit -m 描述
 *
 *  git status  查看工作区的状态
 *
 *  git diff <file>  查看修改的内容
 *
 *
 *  HEAD指向的版本就是当前版本，因此，Git允许我们在版本的历史之间穿梭，使用命令git reset --hard commit_id。
 *
 *  穿梭前，用git log可以查看提交历史，以便确定要回退到哪个版本，如果嫌输出信息太多，看得眼花缭乱的，可以试试加上
 *  --pretty=oneline参数
 *
 *  要重返未来，用git reflog查看命令历史，以便确定要回到未来的哪个版本。
 *
 *
 *
 *
 *  提交后，用git diff HEAD -- <file>  命令可以查看工作区和版本库里面最新版本的区别
 *
 *  用命令git reset HEAD <file>可以把暂存区的修改撤销掉（unstage），重新放回工作区
 *
 *  git reset命令 既可以回退版本，也可以把暂存区的修改回退到工作区
 *
 *  git checkout -- <file>    其实是用版本库里的版本替换工作区的版本，无论工作区是修改还是删除，都可以“一键还原”。
 *
 *  rm <file> 删除工作区的文件
 *
 *  git rm <file> 同时删除工作区和版本库里的文件
 *  如果删除了版本库里的文件 想要找回的话 使用 git reset HEAD <file>， 然后 git checkout -- <file>
 *
 *
 *
 * */