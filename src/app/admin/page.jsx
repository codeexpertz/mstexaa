import { auth } from "@/lib/auth";
import React, { Suspense } from "react";
import styles from "./admin.module.css";
import AdminPosts from "@/components/adminPosts/adminPosts";
import AdminPostForm from "@/components/adminPostForm/adminPostForm";
import AdminUsers from "@/components/adminUsers/adminUsers";
import AdminUserForm from "@/components/adminUserForm/adminUserForm";
import AdminContact from "@/components/adminContact/adminContact";
import { redirect } from "next/navigation";

const AdminPage = async () => {
  const session = await auth();
  console.log("session", session);
  if (!session) {
    redirect("/login");
  }
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        {/* <div className={styles.col}>
            <Suspense fallback={<div>Loading...</div>}>
                <AdminPosts />
            </Suspense>
        </div> */}
        <div className={styles.col}>
          <AdminPostForm userId={session?.user?.id} />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
