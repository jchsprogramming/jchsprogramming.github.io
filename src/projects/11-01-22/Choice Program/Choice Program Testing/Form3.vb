'Muhammed Oruc
'Computer Science - Period 7
'1/14/2022
'Choice Program

Public Class Form3
    Private Sub Button3_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button3.Click

        Form1.Show()
        Me.Close()

    End Sub

    Private Sub Button1_Click(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles Button1.Click

        Form2.Show()
        Me.Close()

    End Sub

    Private Sub Form3_Load(ByVal sender As System.Object, ByVal e As System.EventArgs) Handles MyBase.Load

        If (Form1.eat = True) Then

            Label1.Text = "You ate the banana. Do you want to restart or exit?"

            Button4.Visible = False
            Button5.Visible = False
            Button6.Visible = True
            Button7.Visible = True

        End If

        If (Form1.peel = True) And (Form1.eat = False) Then

            Label1.Text = "            You did not finish your banana yet!"

            Button4.Visible = False
            Button5.Visible = False
            Button6.Visible = False
            Button7.Visible = False
            Button8.Visible = True

        End If

        If (Form1.cat = 1) Then
            PictureBox10.Visible = True
        End If

        If (Form1.drone = 1) Then
            PictureBox7.Visible = True
        End If

        If (Form1.shoes = 1) Then
            PictureBox11.Visible = True
        End If

        If (Form1.bag = 1) Then
            PictureBox12.Visible = True
        End If

        If (Form1.banana = 1) Then
            PictureBox8.Visible = True
        End If

        If (Form1.toycar = 1) Then
            PictureBox9.Visible = True
        End If

    End Sub

    Private Sub Form3_Load_1(sender As Object, e As EventArgs) Handles MyBase.Load

        If (Form1.cat = 1) And (Form1.drone = 1) And (Form1.shoes = 1) And (Form1.bag = 1) And (Form1.toycar = 1) And (Form1.banana = 1) Then

            Button2.Visible = True

        End If

    End Sub

    Private Sub Button1_MouseEnter(sender As Object, e As EventArgs) Handles Button1.MouseEnter

        Button1.ForeColor = Color.Bisque
        Button1.BackColor = Color.Red
    End Sub

    Private Sub Button1_MouseLeave(sender As Object, e As EventArgs) Handles Button1.MouseLeave

        Button1.BackColor = Color.Bisque
        Button1.ForeColor = Color.Red

    End Sub

    Private Sub Button2_MouseEnter(sender As Object, e As EventArgs) Handles Button2.MouseEnter

        Button2.ForeColor = Color.Bisque
        Button2.BackColor = Color.Red

    End Sub

    Private Sub Button2_MouseLeave(sender As Object, e As EventArgs) Handles Button2.MouseLeave

        Button2.BackColor = Color.Bisque
        Button2.ForeColor = Color.Red

    End Sub

    Private Sub Button3_MouseEnter(sender As Object, e As EventArgs) Handles Button3.MouseEnter

        Button3.ForeColor = Color.Bisque
        Button3.BackColor = Color.Red

    End Sub

    Private Sub Button3_MouseLeave(sender As Object, e As EventArgs) Handles Button3.MouseLeave

        Button3.BackColor = Color.Bisque
        Button3.ForeColor = Color.Red

    End Sub


    Private Sub Button2_Click(sender As Object, e As EventArgs) Handles Button2.Click

        Panel1.Visible = True
        Panel2.Visible = True
        Button1.Visible = False
        Button2.Visible = False
        Button3.Visible = False

    End Sub

    Private Sub Button4_Click(sender As Object, e As EventArgs) Handles Button4.Click

        Form4.Show()
        Me.Close()
        Button1.Visible = True
        Button2.Visible = True
        Button3.Visible = True

    End Sub

    Private Sub Button4_MouseEnter(sender As Object, e As EventArgs) Handles Button4.MouseEnter

        Button4.BackColor = Color.LightGreen
        Button4.ForeColor = Color.Black
        Panel2.BackColor = Color.LightGreen

    End Sub

    Private Sub Button4_MouseLeave(sender As Object, e As EventArgs) Handles Button4.MouseLeave

        Button4.BackColor = Color.Tomato
        Button4.ForeColor = Color.White
        Panel2.BackColor = Color.Linen

    End Sub

    Private Sub Button5_MouseEnter(sender As Object, e As EventArgs) Handles Button5.MouseEnter

        Button5.BackColor = Color.LightGreen
        Button5.ForeColor = Color.White
        Panel2.BackColor = Color.LightGreen

    End Sub

    Private Sub Button5_MouseLeave(sender As Object, e As EventArgs) Handles Button5.MouseLeave

        Button5.BackColor = Color.Tomato
        Button5.ForeColor = Color.White
        Panel2.BackColor = Color.Linen

    End Sub

    Private Sub Button6_MouseEnter(sender As Object, e As EventArgs) Handles Button6.MouseEnter

        Button6.BackColor = Color.Red
        Button6.ForeColor = Color.White
        Panel2.BackColor = Color.Red

    End Sub

    Private Sub Button6_MouseLeave(sender As Object, e As EventArgs) Handles Button6.MouseLeave

        Button6.BackColor = Color.Tomato
        Button6.ForeColor = Color.White
        Panel2.BackColor = Color.Linen

    End Sub

    Private Sub Button7_MouseEnter(sender As Object, e As EventArgs) Handles Button7.MouseEnter

        Button7.BackColor = Color.LightGreen
        Button7.ForeColor = Color.Black
        Panel2.BackColor = Color.LightGreen

    End Sub

    Private Sub Button7_MouseLeave(sender As Object, e As EventArgs) Handles Button7.MouseLeave

        Button7.BackColor = Color.Tomato
        Button7.ForeColor = Color.White
        Panel2.BackColor = Color.Linen

    End Sub

    Private Sub Button7_Click(sender As Object, e As EventArgs) Handles Button7.Click

        Form1.eat = False
        Form1.peel = False
        Form1.drone = 0
        Form1.cat = 0
        Form1.toycar = 0
        Form1.shoes = 0
        Form1.banana = 0
        Form1.bag = 0
        Form1.balance = 0
        Form1.level = 1
        Form1.upgrade = 10
        Form1.add = 0

        Form1.Label1.Text = Form1.balance
        Form1.Label2.Text = Form1.level
        Form1.Label3.Text = Form1.upgrade
        Form1.Visible = False

        Form1.Show() 'Change RESET EXIT colors and EVENT handler for Dining ROom button
        Me.Close()

    End Sub

    Private Sub Button6_Click(sender As Object, e As EventArgs) Handles Button6.Click

        Form1.Close()

    End Sub

    Private Sub Button8_Click(sender As Object, e As EventArgs) Handles Button8.Click

        Form4.Show()
        Me.Close()

    End Sub

    Private Sub Button5_Click(sender As Object, e As EventArgs) Handles Button5.Click

        Form4.Show()
        Me.Close()
        Button1.Visible = True
        Button2.Visible = True
        Button3.Visible = True

    End Sub
End Class